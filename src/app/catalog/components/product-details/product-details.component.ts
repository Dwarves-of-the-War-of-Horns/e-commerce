import { Component } from '@angular/core'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'

@Component({
  selector: 'ec-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  public productDetails$ = this.catalogFacade.productDetails$

  constructor(private catalogFacade: CatalogFacade) {}
}
