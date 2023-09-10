import { createActionGroup, props } from '@ngrx/store'

import type { SimpleCart } from 'src/app/shared/models/simple-cart.model'

export const cartApiActions = createActionGroup({
  source: 'Cart Api',
  events: {
    'Create Cart Success': props<{ cart: SimpleCart }>(),
    'Create Cart Failure': props<{ error: string }>(),
    'Load Cart Success': props<{ cart: SimpleCart }>(),
    'Load Cart Failure': props<{ error: string }>(),
    'Update Cart Success': props<{ cart: SimpleCart }>(),
    'Update Cart Failure': props<{ error: string }>(),
  },
})
