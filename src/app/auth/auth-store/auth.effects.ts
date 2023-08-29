import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { TuiAlertService } from '@taiga-ui/core'
import { catchError, of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'

import { alertsAuth } from '../utils/auth-alert.util'
import { authInitApiActions } from './actions/auth-init-api.actions'
import { authInitActions } from './actions/auth-init.actions'
import { logoutActions } from './actions/logout.actions'
import { signInApiActions } from './actions/sign-in-api.actions'
import { signInPageActions } from './actions/sign-in-page.actions'
import { signUpApiActions } from './actions/sign-up-api.actions'
import { signUpPageActions } from './actions/sign-up-page.actions'
import { CommercetoolsService } from 'src/app/core/commercetools/services/commercetools.service'

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions)
  private router = inject(Router)
  private authService = inject(CommercetoolsService)
  private alerts = inject(TuiAlertService)

  public signUpEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpPageActions.signUp),
      switchMap(({ customer }) =>
        this.authService.signUp(customer).pipe(
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
        this.authService.signIn(customer).pipe(
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
        this.authService.getUserInfo().pipe(
          map(user => authInitApiActions.getCustomerSuccess({ customer: user })),
          catchError(({ message }: Error) => of(authInitApiActions.getCustomerFailure({ error: message }))),
        ),
      ),
    )
  })

  public logoutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutActions.logoutStart),
      switchMap(() => this.authService.logout().pipe(map(() => logoutActions.logoutFinish()))),
    )
  })
}
