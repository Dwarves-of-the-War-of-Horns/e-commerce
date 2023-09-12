import { Component, Inject } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { TuiBreakpointService } from '@taiga-ui/core'
import { tap } from 'rxjs'

import { CartFacade } from '../../cart-store/services/cart.facade'
import type { CartProduct } from 'src/app/shared/models/cart-product.model'

@Component({
  selector: 'ec-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  public products$ = this.cartFacade.productsInCart$

  public quantityForm = this.fb.group({})

  constructor(
    private cartFacade: CartFacade,
    private fb: FormBuilder,
    @Inject(TuiBreakpointService) public readonly breakpoint$: TuiBreakpointService,
  ) {
    this.products$
      .pipe(
        tap(products => {
          products?.forEach(product => {
            this.quantityForm.addControl(product?.id, new FormControl(product?.quantity))
          })
        }),
      )
      .subscribe()
  }

  public productsTrackByFn = (_: number, value: CartProduct): CartProduct => {
    return value
  }

  public clearCart(): void {
    this.cartFacade.clearCart()
  }
}
