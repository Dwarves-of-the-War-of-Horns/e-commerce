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
          map(user => {
            alertsAuth[String(true)](this.alerts, 'sign-up')
            this.router.navigate(['home'], { replaceUrl: true }).catch(({ message }: Error) => message || null)

            return signUpApiActions.signUpSuccess({ customer: user })
          }),

          catchError(({ message }: Error) => {
            alertsAuth[String(false)](this.alerts, message)

            return of(signUpApiActions.signUpFailure({ error: message }))
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
          map(user => {
            alertsAuth[String(true)](this.alerts, 'sign-in')

            return signInApiActions.signInSuccess({ customer: user })
          }),
          tap(() => {
            this.router.navigate(['home'], { replaceUrl: true }).catch(({ message }: Error) => message || null)
          }),
          catchError(({ message }: Error) => {
            alertsAuth[String(false)](this.alerts, message)

            return of(signInApiActions.signInFailure({ error: message }))
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
          catchError(({ message }: Error) => of(authInitApiActions.getCustomerFailure({ error: message }))),
        ),
      ),
    )
  })

  public logOutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutActions.logoutStart),
      switchMap(() => this.authHttpService.logOut().pipe(map(() => logoutActions.logoutFinish()))),
    )
  })
}
