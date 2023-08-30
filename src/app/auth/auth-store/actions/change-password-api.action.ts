import type { Customer } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const changePasswordApiActions = createActionGroup({
  source: 'Change Password Api',
  events: {
    'Change Password Success': props<{ customer: Customer }>(),
    'Change Password Failure': props<{ error: string }>(),
  },
})
