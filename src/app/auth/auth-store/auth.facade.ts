import { inject, Injectable } from '@angular/core'
import type { MyCustomerDraft } from '@commercetools/platform-sdk'
import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { Store } from '@ngrx/store'

import { authInitActions } from './auth-init.actions'
import { selectError, selectIsLogined } from './auth.selectors'
import { signInPageActions } from './sign-in-page.actions'
import { signUpPageActions } from './sign-up-page.actions'

@Injectable()
export class AuthFacade {
  private store$ = inject(Store)
  public errorMessage$ = this.store$.select(selectError)
  public isUserLogined$ = this.store$.select(selectIsLogined)

  public signIn(customer: UserAuthOptions): void {
    this.store$.dispatch(signInPageActions.signIn({ customer }))
  }

  public signUp(customer: MyCustomerDraft): void {
    this.store$.dispatch(signUpPageActions.signUp({ customer }))
  }

  public init(): void {
    this.store$.dispatch(authInitActions.getCustomer())
  }
}
