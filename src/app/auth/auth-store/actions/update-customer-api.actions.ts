import type { Customer } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const updateCustomerApiActions = createActionGroup({
  source: 'Update Customer Api',
  events: {
    'Update Customer Success': props<{ customer: Customer }>(),
    'Update Customer Failure': props<{ error: string }>(),
  },
})
