import type { Cart } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const cartApiActions = createActionGroup({
  source: 'Cart Api',
  events: {
    'Cart Load Success': props<{ cart: Cart }>(),
    'Cart Load Failure': props<{ error: string }>(),
  },
})
