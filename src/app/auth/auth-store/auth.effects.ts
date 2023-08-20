import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { TuiAlertService } from '@taiga-ui/core'
import { catchError, of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'

import { alertsAuth } from '../dictionary/auth-alert.dictionary'
import { signInApiActions } from './sign-in-api.actions'
import { signInPageActions } from './sign-in-page.actions'
import { signUpApiActions } from './sign-up-api.actions'
import { signUpPageActions } from './sign-up-page.actions'
import { CommercetoolsHttpService } from 'src/app/core/commercetools/services/commercetools-http.service'

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions)
  private router = inject(Router)
  private authHttpService = inject(CommercetoolsHttpService)
  private alerts = inject(TuiAlertService)
  public signUpEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpPageActions.signUp),
      switchMap(({ customer }) =>
        this.authHttpService.signUp(customer).pipe(
          map(user => signUpApiActions.signUpSuccess({ customer: user })),
          tap((): void => {
            alertsAuth[String(true)](this.alerts, 'sign-up')
            void this.router.navigate(['home'])
          }),
          catchError(error => {
            alertsAuth[String(false)](this.alerts, 'sign-in')

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return of(signUpApiActions.signUpFailure({ error: error.message as string }))
          }),
        ),
      ),
    )
  })

  public signInEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInPageActions.signIn),
      switchMap(({ customer }) =>
        this.authHttpService.signIn(customer).pipe(
          map(user => signInApiActions.signInSuccess({ customer: user })),
          tap((): void => {
            alertsAuth[String(true)](this.alerts, 'sign-in')
            void this.router.navigate(['home'])
          }),

          catchError(error => {
            alertsAuth[String(false)](this.alerts, 'sign-in')

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return of(signInApiActions.signInFailure({ error: error.message as string }))
          }),
        ),
      ),
    )
  })
}
