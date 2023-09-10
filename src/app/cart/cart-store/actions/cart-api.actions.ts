import type { Cart } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const cartApiActions = createActionGroup({
  source: 'Cart Api',
  events: {
    'Create Cart Success': props<{ cart: Cart }>(),
    'Create Cart Failure': props<{ error: string }>(),
    'Load Cart Success': props<{ cart: Cart }>(),
    'Load Cart Failure': props<{ error: string }>(),
  },
})
