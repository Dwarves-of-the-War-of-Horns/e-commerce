import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { map, type Observable } from 'rxjs'

import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Component({
  selector: 'ec-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() public productsData!: { products: SimpleProduct[]; isProductsLoading: boolean } | null

  private productsInCart$ = this.cartFacade.productsInCart$

  constructor(private cartFacade: CartFacade) {}

  public trackProduct(_: number, { key }: SimpleProduct): string {
    return key
  }

  public addToCart = ({ productId, variantId }: { productId: string; variantId: number }): void => {
    this.cartFacade.addProductToCart({ productId, variantId })
  }

  public isInCart = ({ id }: SimpleProduct): Observable<boolean> => {
    return this.productsInCart$.pipe(
      map(products => (products ? products.some(product => product.productId === id) : false)),
    )
  }
}
