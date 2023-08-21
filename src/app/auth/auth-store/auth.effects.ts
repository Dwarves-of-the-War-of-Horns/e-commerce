/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { TuiAlertService } from '@taiga-ui/core'
import { catchError, of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'

import { alertsAuth } from '../dictionary/auth-alert.dictionary'
import { authInitApiActions } from './auth-init-api.actions'
import { authInitActions } from './auth-init.actions'
import { logoutActions } from './logout.actions'
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
            alertsAuth[String(false)](this.alerts, error.message as string)

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
            alertsAuth[String(false)](this.alerts, error.message as string)

            return of(signInApiActions.signInFailure({ error: error.message as string }))
          }),
        ),
      ),
    )
  })

  public authInitEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authInitActions.getCustomer),
      switchMap(() =>
        this.authHttpService.getUserInfo().pipe(
          map(user => authInitApiActions.getCustomerSuccess({ customer: user })),
          catchError(error => of(authInitApiActions.getCustomerFailure({ error: error.message as string }))),
        ),
      ),
    )
  })

  public logOutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutActions.logOutStart),
      switchMap(() => this.authHttpService.logOut().pipe(map(() => logoutActions.logOutFinish()))),
    )
  })
}
