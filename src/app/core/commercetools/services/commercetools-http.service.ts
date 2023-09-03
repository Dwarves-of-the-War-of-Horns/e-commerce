import { inject, Injectable } from '@angular/core'
import type {
  Category,
  Customer,
  MyCustomerChangePassword,
  MyCustomerDraft,
  MyCustomerUpdate,
  ProductData,
  ProductProjection,
  Project,
} from '@commercetools/platform-sdk'
import type { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder'
import type { TokenStore, UserAuthOptions } from '@commercetools/sdk-client-v2'
import { map, type Observable, of, switchMap } from 'rxjs'
import { fromPromise } from 'rxjs/internal/observable/innerFrom'

import { LocalStorageService } from '../../storage/services/local-storage.service'
import { CommercetoolsClientBuilder } from '../commercetools-client-builder'
import { tokenStorageKey } from '../constants/commercetools-token-storage-key'

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

  public changePassword(newPassword: MyCustomerChangePassword): Observable<Customer> {
    return fromPromise(this.api.me().password().post({ body: newPassword }).execute()).pipe(
      map(({ body }) => {
        return body
      }),
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

  public getProducts(category?: string): Observable<ProductProjection[]> {
    const filterQuery: string[] = []

    if (category) {
      filterQuery.push(`categories.id: subtree("${category}")`)
    }

    const queryArgs = {
      'filter.query': filterQuery,
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
}
