import { inject, Injectable } from '@angular/core'
import type { MyCartChangeLineItemQuantityAction, MyCartRemoveLineItemAction } from '@commercetools/platform-sdk'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { TuiAlertService } from '@taiga-ui/core'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs'

import { propertyIsNotNullOrUndefined } from '../../shared/helpers/propertyIsNotNullOrUndefined.helper'
import { cartApiActions } from './actions/cart-api.actions'
import { cartInitActions } from './actions/cart-init.actions'
import { cartPageActions } from './actions/cart-page.actions'
import { catalogPageCartActions } from './actions/catalog-page.actions'
import { selectCurrentCart } from './cart-store.selectors'
import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'
import { alertsHelper } from 'src/app/shared/helpers/alerts.helper'
import { isNotNullOrUndefined } from 'src/app/shared/helpers/isNotNullOrUndefined.helper'

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

  public clearCartEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartPageActions.clearCart),
      withLatestFrom(this.currentCart$),
      map(([, cart]) => cart),
      isNotNullOrUndefined(),
      map(({ id, version, products }) => ({
        id,
        version,
        actions: products.map(
          (product): MyCartRemoveLineItemAction => ({
            action: 'removeLineItem',
            lineItemId: product.id,
          }),
        ),
      })),
      switchMap(({ id, version, actions }) =>
        this.cartService.updateCart(id, { version, actions }).pipe(
          map(cart => {
            alertsHelper[String(true)](this.alertService, 'remove all products')

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

  public removeItemFromCartEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartPageActions.removeItem),
      withLatestFrom(this.currentCart$),
      map(([{ itemId }, cart]) => ({ lineItemId: itemId, cart })),
      propertyIsNotNullOrUndefined('cart'),
      map(({ lineItemId, cart }) => ({
        lineItemId,
        cartId: cart.id,
        version: cart.version,
      })),
      switchMap(({ cartId, version, lineItemId }) =>
        this.cartService
          .updateCart(cartId, {
            version,
            actions: [{ action: 'removeLineItem', lineItemId }],
          })
          .pipe(
            map(cart => cartApiActions.updateCartSuccess({ cart })),
            catchError(({ message }: Error) => of(cartApiActions.updateCartFailure({ error: message }))),
          ),
      ),
    )
  })

  public changeItemsAmountInCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartPageActions.changeItemAmount),
      withLatestFrom(this.currentCart$),
      map(([{ items }, cart]) => ({ items, cart })),
      propertyIsNotNullOrUndefined('cart'),
      map(({ items, cart }) => ({
        id: cart.id,
        version: cart.version,
        actions: items.map(
          ([id, quantity]): MyCartChangeLineItemQuantityAction => ({
            action: 'changeLineItemQuantity',
            lineItemId: id,
            quantity,
          }),
        ),
      })),
      switchMap(({ id, version, actions }) =>
        this.cartService.updateCart(id, { version, actions }).pipe(
          map(cart => cartApiActions.updateCartSuccess({ cart })),
          catchError(({ message }: Error) => of(cartApiActions.updateCartFailure({ error: message }))),
        ),
      ),
    )
  })
}
