import { Component, Input } from '@angular/core'

import { SimpleProductPrices } from 'src/app/shared/models/simple-product-prices'

@Component({
  selector: 'ec-product-details-price',
  templateUrl: './product-details-price.component.html',
  styleUrls: ['./product-details-price.component.scss'],
})
export class ProductDetailsPriceComponent {
  @Input() public prices?: SimpleProductPrices
}
