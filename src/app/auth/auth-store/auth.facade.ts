import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import type { MyCustomerDraft } from '@commercetools/platform-sdk'
import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { Store } from '@ngrx/store'

import { selectError, selectIsLogined } from './auth.selectors'
import { signInPageActions } from './sign-in-page.actions'
import { signUpPageActions } from './sign-up-page.actions'

@Injectable()
export class AuthFacade {
  private store$ = inject(Store)
  private router = inject(Router)
  public errorMessage$ = this.store$.select(selectError)
  public isUserLogined$ = this.store$.select(selectIsLogined)

  private subscribeToUserLogin(): void {
    this.isUserLogined$.subscribe(isUserLogined => {
      if (isUserLogined) {
        void this.router.navigate(['home'])
      }
    })
  }

  public signIn(customer: UserAuthOptions): void {
    this.store$.dispatch(signInPageActions.signIn({ customer }))
    this.subscribeToUserLogin()
  }

  public signUp(customer: MyCustomerDraft): void {
    this.store$.dispatch(signUpPageActions.signUp({ customer }))
    this.subscribeToUserLogin()
  }
}
