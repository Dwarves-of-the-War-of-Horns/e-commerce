import type { MyCustomerUpdate } from '@commercetools/platform-sdk'
import { createActionGroup, props } from '@ngrx/store'

export const updateCustomerPageActions = createActionGroup({
  source: 'Update Customer Page',
  events: {
    'Update Customer': props<{ updateCustomer: MyCustomerUpdate }>(),
  },
})
