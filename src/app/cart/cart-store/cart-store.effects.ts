import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'

import { createCartActions } from './actions/cart-create.action'
import { createCartApiActions } from './actions/cart-create.api.action'
import { cartInitActions } from './actions/cart-init.actions'
import { cartApiActions } from './actions/cart-init.api.actions'
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
          map(cart => cartApiActions.cartLoadSuccess({ cart })),
          catchError(({ message }: Error) => {
            this.store$.dispatch(cartApiActions.cartLoadFailure({ error: message }))

            return of(createCartActions.createCart())
          }),
        ),
      ),
    )
  })

  public createCartEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createCartActions.createCart),
      switchMap(() =>
        this.cartService.createCart().pipe(
          map(cart => createCartApiActions.createCartSuccess({ cart })),
          catchError(({ message }: Error) => of(createCartApiActions.createCartFailure({ error: message }))),
        ),
      ),
    )
  })
}
