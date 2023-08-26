import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { createActionGroup, props } from '@ngrx/store'

export const signInPageActions = createActionGroup({
  source: 'Sign In Page',
  events: {
    'Sign In': props<{ customer: UserAuthOptions }>(),
  },
})
