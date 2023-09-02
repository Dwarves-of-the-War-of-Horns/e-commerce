import { Injectable } from '@angular/core'
import type { ProductProjection } from '@commercetools/platform-sdk'
import type { Observable } from 'rxjs'

import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

@Injectable()
export class CatalogHttpService {
  constructor(private commercetoolsService: CommercetoolsService) {}

  public getCategories(): Observable<SimpleCategory[]> {
    return this.commercetoolsService.getCategories()
  }

  public getProducts(): Observable<ProductProjection[]> {
    return this.commercetoolsService.getProducts()
  }
}
