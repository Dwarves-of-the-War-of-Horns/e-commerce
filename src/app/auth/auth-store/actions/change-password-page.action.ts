import type { MyCustomerChangePassword } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const changePasswordPageActions = createActionGroup({
  source: 'Change Password Page',
  events: {
    'Change Password': props<{ newPassword: MyCustomerChangePassword }>(),
  },
})
