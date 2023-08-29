import { createActionGroup, emptyProps } from '@ngrx/store'

export const logoutActions = createActionGroup({
  source: 'Logout',
  events: {
    'Logout Start': emptyProps(),
    'Logout Finish': emptyProps(),
  },
})
