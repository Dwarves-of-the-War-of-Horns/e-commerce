import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CartFacade } from './cart-store/services/cart.facade'

@Component({
  selector: 'ec-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {
  public products$ = this.cartFacade.productsInCart$
  public isLoading$ = this.cartFacade.isLoading$
  constructor(private cartFacade: CartFacade) {}
}
