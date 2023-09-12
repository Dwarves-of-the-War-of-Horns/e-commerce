import { createActionGroup, emptyProps } from '@ngrx/store'

export const cartPageActions = createActionGroup({
  source: 'Cart Page',
  events: {
    'Clear Cart': emptyProps(),
  },
})
