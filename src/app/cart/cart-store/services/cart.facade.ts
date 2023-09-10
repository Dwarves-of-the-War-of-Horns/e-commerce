import { inject, Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { cartInitActions } from '../actions/cart-init.actions'
import { catalogPageCartActions } from '../actions/catalog-page.actions'
import { selectCurrentCart, selectError } from '../cart-store.selectors'

@Injectable()
export class CartFacade {
  private store$ = inject(Store)
  public errorMessage$ = this.store$.select(selectError)
  public currentCart$ = this.store$.select(selectCurrentCart)

  public initCart(): void {
    this.store$.dispatch(cartInitActions.getCart())
  }

  public createCart(): void {
    this.store$.dispatch(cartInitActions.createCart())
  }

  public addProductToCart({ productId, variantId }: { productId: string; variantId: number }): void {
    this.store$.dispatch(catalogPageCartActions.addProduct({ productId, variantId }))
  }
}