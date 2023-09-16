import { inject, Injectable } from '@angular/core'
import type { Customer, MyCartUpdate, MyCustomerDraft, MyCustomerUpdate, Project } from '@commercetools/platform-sdk'
import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { map, type Observable } from 'rxjs'

import { arrayToTree } from '../helpers/array-to-tree.helper'
import { convertAttributeToSimpleAttribute } from '../helpers/convert-attribute-to-simple-attribute.helper'
import { convertCartToSimpleCart } from '../helpers/convert-cart-to-simple-cart.helper'
import { convertProductProjectionToSimpleProduct } from '../helpers/convert-product-projection-to-simple-product.helper'
import { convertResponseParamsToQueryParams } from '../helpers/convert-response-params-to-filter-params.helper'
import { CommercetoolsHttpService } from './commercetools-http.service'
import type { ChangePasswordProps } from 'src/app/shared/models/change-password-props.model'
import type { ConvertedProductState } from 'src/app/shared/models/converted-products-state.model'
import type { QueryParams } from 'src/app/shared/models/query-params.model'
import type { SimpleAttribute } from 'src/app/shared/models/simple-attribute.model'
import type { SimpleCart } from 'src/app/shared/models/simple-cart.model'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Injectable({
  providedIn: 'root',
})
export class CommercetoolsService {
  private httpService: CommercetoolsHttpService = inject(CommercetoolsHttpService)

  public getProject(): Observable<Project | undefined> {
    return this.httpService.getProject()
  }

  public signIn(userAuthOptions: UserAuthOptions): Observable<Customer> {
    return this.httpService.signIn(userAuthOptions)
  }

  public getUserInfo(): Observable<Customer> {
    return this.httpService.getUserInfo()
  }

  public signUp(customer: MyCustomerDraft): Observable<Customer> {
    return this.httpService.signUp(customer)
  }

  public logout(): Observable<boolean> {
    return this.httpService.logout()
  }

  public updateCustomerInfo(updateInfo: MyCustomerUpdate): Observable<Customer> {
    return this.httpService.updateCustomerInfo(updateInfo)
  }

  public getCategories(): Observable<SimpleCategory[]> {
    return this.httpService.getCategories().pipe(map(categories => arrayToTree(categories)))
  }

  public changePassword(newPassword: ChangePasswordProps): Observable<Customer> {
    return this.httpService.changePassword(newPassword)
  }

  public getProducts(queryParams: QueryParams): Observable<ConvertedProductState> {
    return this.httpService.getProducts(queryParams).pipe(
      map(({ answerQueryParams, productProjectionPagedQueryResponse }) => {
        return {
          queryParams: convertResponseParamsToQueryParams({ answerQueryParams, productProjectionPagedQueryResponse }),
          products: productProjectionPagedQueryResponse.results.map(convertProductProjectionToSimpleProduct),
        }
      }),
    )
  }

  public getProductByKey(productKey: string): Observable<SimpleProduct> {
    return this.httpService.getProductByKey(productKey).pipe(map(convertProductProjectionToSimpleProduct))
  }

  public getFilterAttributes(): Observable<SimpleAttribute[]> {
    return this.httpService.getProductTypes().pipe(
      map(types => types[0].attributes ?? []),
      map(attributes => attributes.map(convertAttributeToSimpleAttribute)),
    )
  }

  public getCart(): Observable<SimpleCart> {
    return this.httpService.getCart().pipe(map(convertCartToSimpleCart))
  }

  public createCart(): Observable<SimpleCart> {
    return this.httpService.createCart().pipe(map(convertCartToSimpleCart))
  }

  public updateCart(cartId: string, cart: MyCartUpdate): Observable<SimpleCart> {
    return this.httpService.updateCart(cartId, cart).pipe(map(convertCartToSimpleCart))
  }
}
