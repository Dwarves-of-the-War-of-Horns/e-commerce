import { createActionGroup, props } from '@ngrx/store'

export const productDetailsPageActions = createActionGroup({
  source: 'Product Details Page',
  events: {
    'Load Product Details': props<{ productKey: string }>(),
  },
})
