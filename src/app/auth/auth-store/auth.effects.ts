import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'

import { authInitApiActions } from './auth-init-api.actions'
import { authInitActions } from './auth-init.actions'
import { signInApiActions } from './sign-in-api.actions'
import { signInPageActions } from './sign-in-page.actions'
import { signUpApiActions } from './sign-up-api.actions'
import { signUpPageActions } from './sign-up-page.actions'
import { CommercetoolsHttpService } from 'src/app/core/commercetools/services/commercetools-http.service'

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions)
  authHttpService = inject(CommercetoolsHttpService)

  signUpEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpPageActions.signUp),
      switchMap(({ customer }) =>
        this.authHttpService.signUp(customer).pipe(
          map(user => signUpApiActions.signUpSuccess({ customer: user })),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          catchError(error => of(signUpApiActions.signUpFailure({ error: error.message as string }))),
        ),
      ),
    )
  })

  signInEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInPageActions.signIn),
      switchMap(({ customer }) =>
        this.authHttpService.signIn(customer).pipe(
          map(user => signInApiActions.signInSuccess({ customer: user })),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          catchError(error => of(signInApiActions.signInFailure({ error: error.message as string }))),
        ),
      ),
    )
  })

  authInitEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authInitActions.getCustomer),
      switchMap(() =>
        this.authHttpService.getUserInfo().pipe(
          map(user => authInitApiActions.getCustomerSuccess({ customer: user })),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          catchError(error => of(authInitApiActions.getCustomerFailure({ error: error.message as string }))),
        ),
      ),
    )
  })
}
