import { createActionGroup, emptyProps } from '@ngrx/store'

export const cartInitActions = createActionGroup({
  source: 'Cart Init',
  events: {
    'Get Cart': emptyProps(),
  },
})
