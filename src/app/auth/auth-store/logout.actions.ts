import { createActionGroup, emptyProps } from '@ngrx/store'

export const logoutActions = createActionGroup({
  source: 'Log Out',
  events: {
    'Log Out Start': emptyProps(),
    'Log Out Finish': emptyProps(),
  },
})
