import { Component, inject, type OnInit } from '@angular/core'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'

@Component({
  selector: 'ec-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private catalogFacade = inject(CatalogFacade)
  public productDetails$ = this.catalogFacade.productDetails

  public ngOnInit(): void {
    this.productDetails$.subscribe(console.log)
  }
}
