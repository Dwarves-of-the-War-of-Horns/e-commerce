import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'

import { createCartActions } from './actions/cart-create.action'
import { createCartsApiActions } from './actions/cart-create.api.action'
import { cartsInitActions } from './actions/carts-init.actions'
import { cartsApiActions } from './actions/carts-init.api.actions'
import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'

@Injectable()
export class CartEffects {
  private cartService = inject(CommercetoolsService)
  private actions$ = inject(Actions)
  private store$ = inject(Store)

  public cartsInitEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartsInitActions.getCarts),
      switchMap(() =>
        this.cartService.getCart().pipe(
          map(carts => cartsApiActions.cartsLoadSuccess({ carts })),
          tap(({ carts }) => {
            if (carts.count === 0) {
              this.store$.dispatch(createCartActions.createCart())
            }
          }),
          catchError(({ message }: Error) => of(cartsApiActions.cartsLoadFailure({ error: message }))),
        ),
      ),
    )
  })

  public createCartsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createCartActions.createCart),
      switchMap(() =>
        this.cartService.createCart().pipe(
          map(cart => createCartsApiActions.createCartLoadSuccess({ cart })),
          catchError(({ message }: Error) => of(createCartsApiActions.createCartLoadFailure({ error: message }))),
        ),
      ),
    )
  })
}
