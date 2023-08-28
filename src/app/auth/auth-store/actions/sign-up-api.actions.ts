import type { Customer } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const signUpApiActions = createActionGroup({
  source: 'Sign Up Api',
  events: {
    'Sign Up Success': props<{ customer: Customer }>(),
    'Sign Up Failure': props<{ error: string }>(),
  },
})
