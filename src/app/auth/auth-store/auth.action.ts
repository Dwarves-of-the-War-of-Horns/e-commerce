import type { Customer, MyCustomerDraft } from '@commercetools/platform-sdk'
import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { createActionGroup, props } from '@ngrx/store'

export const signUpApiActions = createActionGroup({
  source: 'Sign Up Api',
  events: {
    'Sign Up Success': props<{ customer: Customer }>(),
    'Sign Up Failure': props<{ error: string }>(),
  },
})

export const signUpPageActions = createActionGroup({
  source: 'Sign Up Page',
  events: {
    'Sign Up': props<{ customer: MyCustomerDraft }>(),
  },
})

export const signInApiActions = createActionGroup({
  source: 'Sign In Api',
  events: {
    'Sign In Success': props<{ customer: Customer }>(),
    'Sign In Failure': props<{ error: string }>(),
  },
})

export const signInPageActions = createActionGroup({
  source: 'Sign In Page',
  events: {
    'Sign In': props<{ customer: UserAuthOptions }>(),
  },
})
