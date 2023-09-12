import { Component, Inject } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { TuiBreakpointService } from '@taiga-ui/core'
import { tap } from 'rxjs'

import { CartFacade } from '../../cart-store/services/cart.facade'

@Component({
  selector: 'ec-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss'],
})
export class OrderItemsComponent {
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
}
