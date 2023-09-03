import { Component, inject } from '@angular/core'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'

@Component({
  selector: 'ec-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  private catalogFacade = inject(CatalogFacade)
  public productDetails$ = this.catalogFacade.productDetails
}
