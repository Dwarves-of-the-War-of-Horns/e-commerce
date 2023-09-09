import type { CartPagedQueryResponse } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const cartsApiActions = createActionGroup({
  source: 'Carts Api',
  events: {
    'Carts Load Success': props<{ carts: CartPagedQueryResponse }>(),
    'Carts Load Failure': props<{ error: string }>(),
  },
})
