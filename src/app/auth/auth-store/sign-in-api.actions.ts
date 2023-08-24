import type { Customer } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const signInApiActions = createActionGroup({
  source: 'Sign In Api',
  events: {
    'Sign In Success': props<{ customer: Customer }>(),
    'Sign In Failure': props<{ error: string }>(),
  },
})
