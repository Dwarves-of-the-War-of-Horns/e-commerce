import { createActionGroup, emptyProps } from '@ngrx/store'

export const authInitActions = createActionGroup({
  source: 'Auth Init',
  events: {
    'Get Customer': emptyProps(),
  },
})
