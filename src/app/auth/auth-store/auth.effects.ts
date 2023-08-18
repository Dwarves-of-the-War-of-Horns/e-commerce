import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'

import { signUpApiActions, signUpPageActions } from './auth.action'
import { CommercetoolsHttpService } from 'src/app/core/commercetools/services/commercetools-http.service'

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions)
  authHttpService = inject(CommercetoolsHttpService)

  loadUser$ = createEffect(() => {
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
}
