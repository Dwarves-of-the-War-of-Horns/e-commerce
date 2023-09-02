import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'

import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Injectable()
export class CatalogHttpService {
  constructor(private commercetoolsService: CommercetoolsService) {}

  public getCategories(): Observable<SimpleCategory[]> {
    return this.commercetoolsService.getCategories()
  }

  public getProducts(category?: string): Observable<SimpleProduct[]> {
    return this.commercetoolsService.getProducts(category)
  }
}
