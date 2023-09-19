import type { MyCustomerDraft } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const signUpPageActions = createActionGroup({
  source: 'Sign Up Page',
  events: {
    'Sign Up': props<{ customer: MyCustomerDraft }>(),
  },
})
