import { createActionGroup, emptyProps } from '@ngrx/store'

export const cartsInitActions = createActionGroup({
  source: 'Carts Init',
  events: {
    'Get Carts': emptyProps(),
  },
})
