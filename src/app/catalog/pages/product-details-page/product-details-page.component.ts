import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'

@Component({
  selector: 'ec-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsPageComponent implements OnInit {
  public productKey = this.route.snapshot.paramMap.get('key')

  public errorMessage$ = this.catalogFacade.errorMessage$
  public isLoading$ = this.catalogFacade.isLoading$

  constructor(
    private route: ActivatedRoute,
    private catalogFacade: CatalogFacade,
  ) {}
  public ngOnInit(): void {
    if (!this.productKey) {
      return
    }

    this.catalogFacade.loadProductByKey(this.productKey)
  }
}
