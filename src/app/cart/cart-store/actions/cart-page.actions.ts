import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const cartPageActions = createActionGroup({
  source: 'Cart Page',
  events: {
    'Clear Cart': emptyProps(),
    'Remove Item': props<{ itemId: string }>(),
  },
})
