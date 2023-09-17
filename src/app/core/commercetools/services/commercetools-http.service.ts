import { inject, Injectable } from '@angular/core'
import type {
  Cart,
  Category,
  Customer,
  DiscountCode,
  MyCartUpdate,
  MyCustomerDraft,
  MyCustomerUpdate,
  ProductProjection,
  ProductType,
  Project,
} from '@commercetools/platform-sdk'
import type { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder'
import type { TokenStore, UserAuthOptions } from '@commercetools/sdk-client-v2'
import { map, type Observable, of, switchMap, tap } from 'rxjs'
import { fromPromise } from 'rxjs/internal/observable/innerFrom'

import { LocalStorageService } from '../../storage/services/local-storage.service'
import { CommercetoolsClientBuilder } from '../commercetools-client-builder'
import { tokenStorageKey } from '../constants/commercetools-token-storage-key'
import type { ChangePasswordProps } from 'src/app/shared/models/change-password-props.model'
import type { QueryParams } from 'src/app/shared/models/query-params.model'

@Injectable({
  providedIn: 'root',
})
export class CommercetoolsHttpService {
  private localStorageService: LocalStorageService = inject(LocalStorageService)
  private builder: CommercetoolsClientBuilder = inject(CommercetoolsClientBuilder)
  private api: ByProjectKeyRequestBuilder

  constructor() {
    const storedToken = this.localStorageService.getItem<TokenStore>(tokenStorageKey)

    if (storedToken?.refreshToken) {
      this.api = this.builder.getRefreshTokenClient(storedToken.refreshToken)
    } else {
      this.api = this.builder.getDefaultClient()
    }
  }

  public getProject(): Observable<Project | undefined> {
    return fromPromise(this.api.get().execute()).pipe(
      map(({ body }) => {
        return body
      }),
    )
  }

  public signIn(userAuthOptions: UserAuthOptions): Observable<Customer> {
    const { username: email, password } = userAuthOptions

    return fromPromise(this.api.me().login().post({ body: { email, password } }).execute()).pipe(
      switchMap(() => {
        this.api = this.builder.getPasswordClient(userAuthOptions)

        return this.getUserInfo()
      }),
    )
  }

  public getUserInfo(): Observable<Customer> {
    return fromPromise(this.api.me().get().execute()).pipe(
      map(({ body }) => {
        return body
      }),
    )
  }

  public signUp(customer: MyCustomerDraft): Observable<Customer> {
    const { email: username, password } = customer

    return fromPromise(this.api.me().signup().post({ body: customer }).execute()).pipe(
      switchMap(() => {
        this.api = this.builder.getPasswordClient({ username, password })

        return this.getUserInfo()
      }),
    )
  }

  public logout(): Observable<boolean> {
    this.localStorageService.removeItem(tokenStorageKey)
    this.api = this.builder.getDefaultClient()

    return of(true)
  }

  public updateCustomerInfo(updateInfo: MyCustomerUpdate): Observable<Customer> {
    return fromPromise(this.api.me().post({ body: updateInfo }).execute()).pipe(
      map(({ body }) => {
        return body
      }),
    )
  }

  public changePassword({
    version,
    currentPassword,
    newPassword,
    username,
  }: ChangePasswordProps): Observable<Customer> {
    return fromPromise(
      this.api.me().password().post({ body: { version, currentPassword, newPassword } }).execute(),
    ).pipe(
      map(({ body }) => body),
      tap(() => this.logout()),
      switchMap(() => this.signIn({ username, password: newPassword })),
    )
  }

  public getCategories(): Observable<Category[]> {
    return fromPromise(
      this.api
        .categories()
        .get({
          queryArgs: {
            limit: 100,
          },
        })
        .execute(),
    ).pipe(map(({ body }) => body.results))
  }

  public getProducts({ category, sort, search }: QueryParams): Observable<ProductProjection[]> {
    const queryArgs = {
      fuzzy: search ? true : undefined,
      sort,
      'text.en-US': search,
      'filter.query': category ? [`categories.id: subtree("${category}")`] : undefined,
    }

    return fromPromise(this.api.productProjections().search().get({ queryArgs }).execute()).pipe(
      map(({ body }) => body.results),
    )
  }

  public getProductByKey(productKey: string): Observable<ProductProjection> {
    return fromPromise(this.api.productProjections().withKey({ key: productKey }).get().execute()).pipe(
      map(({ body }) => body),
    )
  }

  public getProductTypes(): Observable<ProductType[]> {
    return fromPromise(this.api.productTypes().get().execute()).pipe(map(({ body }) => body.results))
  }

  public getCart(): Observable<Cart> {
    return fromPromise(this.api.me().activeCart().get().execute()).pipe(map(({ body }) => body))
  }

  public createCart(): Observable<Cart> {
    return fromPromise(
      this.api
        .me()
        .carts()
        .post({ body: { currency: 'USD' } })
        .execute(),
    ).pipe(map(({ body }) => body))
  }

  public updateCart(cartId: string, cart: MyCartUpdate): Observable<Cart> {
    return fromPromise(this.api.me().carts().withId({ ID: cartId }).post({ body: cart }).execute()).pipe(
      map(({ body }) => body),
    )
  }

  public getDiscountCodesById(...codeIds: string[]): Observable<DiscountCode[]> {
    return fromPromise(
      this.api
        .discountCodes()
        .get({ queryArgs: { where: `id in (${codeIds.map(id => `"${id}"`).join(',')})` } })
        .execute(),
    ).pipe(map(({ body }) => body.results))
  }

  public getAllDiscountCodes(): Observable<DiscountCode[]> {
    return fromPromise(this.api.discountCodes().get().execute()).pipe(map(({ body }) => body.results))
  }
}
