import type { Cart } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const createCartApiActions = createActionGroup({
  source: 'Create Cart Api',
  events: {
    'Create Cart Success': props<{ cart: Cart }>(),
    'Create Cart Failure': props<{ error: string }>(),
  },
})
