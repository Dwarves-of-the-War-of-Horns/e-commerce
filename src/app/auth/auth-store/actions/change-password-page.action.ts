import { createActionGroup, props } from '@ngrx/store'

import type { ChangePasswordProps } from 'src/app/shared/models/change-password-props.model'

export const changePasswordPageActions = createActionGroup({
  source: 'Change Password Page',
  events: {
    'Change Password': props<{ newPassword: ChangePasswordProps }>(),
  },
})
