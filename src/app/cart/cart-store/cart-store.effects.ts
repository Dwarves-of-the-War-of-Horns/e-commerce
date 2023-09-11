import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, map, of, switchMap } from 'rxjs'

import { cartApiActions } from './actions/cart-api.actions'
import { cartInitActions } from './actions/cart-init.actions'
import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'

@Injectable()
export class CartEffects {
  private cartService = inject(CommercetoolsService)
  private actions$ = inject(Actions)
  private store$ = inject(Store)

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
}
