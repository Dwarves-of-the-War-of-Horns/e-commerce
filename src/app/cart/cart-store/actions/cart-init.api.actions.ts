import type { CartPagedQueryResponse } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const cartApiActions = createActionGroup({
  source: 'Cart Api',
  events: {
    'Cart Load Success': props<{ carts: CartPagedQueryResponse }>(),
    'Cart Load Failure': props<{ error: string }>(),
  },
})
