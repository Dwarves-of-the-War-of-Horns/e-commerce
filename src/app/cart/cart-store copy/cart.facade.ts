import { inject, Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { cartsInitActions } from './actions/carts-init.actions'
import { selectCurrentCart, selectError } from './cart-store.selectors'

@Injectable()
export class CartFacade {
  private store$ = inject(Store)
  public errorMessage$ = this.store$.select(selectError)
  public currentCart$ = this.store$.select(selectCurrentCart)

  public initCart(): void {
    this.store$.dispatch(cartsInitActions.getCarts())
  }
}
