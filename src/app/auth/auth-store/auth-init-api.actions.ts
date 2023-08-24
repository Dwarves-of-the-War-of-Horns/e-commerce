import type { Customer } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const authInitApiActions = createActionGroup({
  source: 'Auth Init Api',
  events: {
    'Get Customer Success': props<{ customer: Customer }>(),
    'Get Customer Failure': props<{ error: string }>(),
  },
})
