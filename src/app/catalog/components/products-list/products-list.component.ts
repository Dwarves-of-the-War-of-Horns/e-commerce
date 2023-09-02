import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Observable, of } from 'rxjs'

import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Component({
  selector: 'ec-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() public products$: Observable<SimpleProduct[]> = of([])
  @Input() public isProductsLoading$: Observable<boolean> = of(true)

  public trackProduct(index: number, { key }: SimpleProduct): string {
    return key
  }
}
