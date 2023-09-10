import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs'

import { cartApiActions } from './actions/cart-api.actions'
import { cartInitActions } from './actions/cart-init.actions'
import { catalogPageCartActions } from './actions/catalog-page.actions'
import { selectCurrentCart } from './cart-store.selectors'
import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'

@Injectable()
export class CartEffects {
  private cartService = inject(CommercetoolsService)
  private actions$ = inject(Actions)
  private store$ = inject(Store)
  private currentCart$ = this.store$.select(selectCurrentCart)

  public cartInitEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartInitActions.getCart),
      switchMap(() =>
        this.cartService.getCart().pipe(
          map(cart => cartApiActions.loadCartSuccess({ cart })),
          catchError(({ message }: Error) => {
            this.store$.dispatch(cartApiActions.loadCartFailure({ error: message }))

            return of(cartInitActions.createCart())
          }),
        ),
      ),
    )
  })

  public createCartEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartInitActions.createCart),
      switchMap(() =>
        this.cartService.createCart().pipe(
          map(cart => cartApiActions.createCartSuccess({ cart })),
          catchError(({ message }: Error) => of(cartApiActions.createCartFailure({ error: message }))),
        ),
      ),
    )
  })

  public addProductToCartEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(catalogPageCartActions.addProduct),
      withLatestFrom(this.currentCart$),
      filter(([, cart]) => cart !== null),
      map(([{ productId, variantId }, cart]) => ({
        productId,
        variantId,
        cartId: cart?.id,
        cartVersion: cart?.version,
      })),
      switchMap(({ productId, variantId, cartId, cartVersion }) =>
        this.cartService
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          .updateCart(cartId!, {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            version: cartVersion!,
            actions: [{ action: 'addLineItem', productId, variantId, quantity: 1 }],
          })
          .pipe(
            map(cart => cartApiActions.updateCartSuccess({ cart })),
            catchError(({ message }: Error) => of(cartApiActions.updateCartFailure({ error: message }))),
          ),
      ),
    )
  })
}
