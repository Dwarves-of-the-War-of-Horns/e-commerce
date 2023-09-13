import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'

import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'
import type { ConvertedProductState } from 'src/app/shared/models/converted-products-state.model'
import type { FilterParams } from 'src/app/shared/models/filter-params.model'
import type { SimpleAttribute } from 'src/app/shared/models/simple-attribute.model'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Injectable()
export class CatalogHttpService {
  constructor(private commercetoolsService: CommercetoolsService) {}

  public getCategories(): Observable<SimpleCategory[]> {
    return this.commercetoolsService.getCategories()
  }

  public loadProducts(queryParams: FilterParams): Observable<ConvertedProductState> {
    return this.commercetoolsService.getProducts(queryParams)
  }

  public getProductByKey(productKey: string): Observable<SimpleProduct> {
    return this.commercetoolsService.getProductByKey(productKey)
  }

  public loadFilterAttributes(): Observable<SimpleAttribute[]> {
    return this.commercetoolsService.getFilterAttributes()
  }
}
