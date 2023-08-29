import { inject, Injectable } from '@angular/core'
import type { MyCustomerDraft } from '@commercetools/platform-sdk'
import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { Store } from '@ngrx/store'

import { authInitActions } from './actions/auth-init.actions'
import { logoutActions } from './actions/logout.actions'
import { signInPageActions } from './actions/sign-in-page.actions'
import { signUpPageActions } from './actions/sign-up-page.actions'
import { selectAuthData, selectError, selectIsLoading, selectIsLoggedIn } from './auth.selectors'

@Injectable()
export class AuthFacade {
  private store$ = inject(Store)
  public errorMessage$ = this.store$.select(selectError)
  public isLoggedIn$ = this.store$.select(selectIsLoggedIn)
  public isLoading$ = this.store$.select(selectIsLoading)
  public userData$ = this.store$.select(selectAuthData)

  public signIn(customer: UserAuthOptions): void {
    this.store$.dispatch(signInPageActions.signIn({ customer }))
  }

  public signUp(customer: MyCustomerDraft): void {
    this.store$.dispatch(signUpPageActions.signUp({ customer }))
  }

  public initAuth(): void {
    this.store$.dispatch(authInitActions.getCustomer())
  }

  public logout(): void {
    this.store$.dispatch(logoutActions.logoutStart())
  }
}
