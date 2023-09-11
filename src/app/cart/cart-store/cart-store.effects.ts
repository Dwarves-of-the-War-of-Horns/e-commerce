import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { TuiAlertService } from '@taiga-ui/core'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs'

import { propertyIsNotNullOrUndefined } from '../../shared/helpers/propertyIsNotNullOrUndefined.helper'
import { cartApiActions } from './actions/cart-api.actions'
import { cartInitActions } from './actions/cart-init.actions'
import { catalogPageCartActions } from './actions/catalog-page.actions'
import { selectCurrentCart } from './cart-store.selectors'
import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'
import { alertsHelper } from 'src/app/shared/helpers/alerts.helper'

@Injectable()
export class CartEffects {
  private cartService = inject(CommercetoolsService)
  private actions$ = inject(Actions)
  private store$ = inject(Store)
  private alertService = inject(TuiAlertService)
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
      map(([{ productId, variantId }, cart]) => ({ productId, variantId, cart })),
      propertyIsNotNullOrUndefined('cart'),
      map(({ productId, variantId, cart }) => ({
        productId,
        variantId,
        cartId: cart.id,
        version: cart.version,
      })),
      switchMap(({ productId, variantId, cartId, version }) =>
        this.cartService
          .updateCart(cartId, {
            version,
            actions: [{ action: 'addLineItem', productId, variantId, quantity: 1 }],
          })
          .pipe(
            map(cart => cartApiActions.updateCartSuccess({ cart })),
            catchError(({ message }: Error) => of(cartApiActions.updateCartFailure({ error: message }))),
          ),
      ),
    )
  })

  public removeProductFromCartEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(catalogPageCartActions.removeProduct),
      withLatestFrom(this.currentCart$),
      map(([{ productId, variantId }, cart]) => ({ productId, variantId, cart })),
      propertyIsNotNullOrUndefined('cart'),
      map(({ productId, variantId, cart }) => ({
        lineItemId: cart.products.find(product => product.productId === productId && product.variantId === variantId)
          ?.id,
        cartId: cart.id,
        version: cart.version,
      })),
      propertyIsNotNullOrUndefined('lineItemId'),
      switchMap(({ cartId, version, lineItemId }) =>
        this.cartService
          .updateCart(cartId, {
            version,
            actions: [{ action: 'removeLineItem', lineItemId }],
          })
          .pipe(
            map(cart => {
              alertsHelper[String(true)](this.alertService, 'remove this product')

              return cartApiActions.updateCartSuccess({ cart })
            }),
            catchError(({ message }: Error) => {
              alertsHelper[String(false)](this.alertService, message)

              return of(cartApiActions.updateCartFailure({ error: message }))
            }),
          ),
      ),
    )
  })
}
