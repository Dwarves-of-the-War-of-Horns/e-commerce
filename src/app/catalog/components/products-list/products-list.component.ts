import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Component({
  selector: 'ec-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() public productsData!: { products: SimpleProduct[]; isProductsLoading: boolean } | null

  public trackProduct(index: number, { key }: SimpleProduct): string {
    return key
  }
}
