import type { Cart } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const createCartsApiActions = createActionGroup({
  source: 'Create Cart Api',
  events: {
    'Create Cart Load Success': props<{ cart: Cart }>(),
    'Create Cart Load Failure': props<{ error: string }>(),
  },
})
