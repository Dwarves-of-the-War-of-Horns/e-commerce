import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const cartPageActions = createActionGroup({
  source: 'Cart Page',
  events: {
    'Clear Cart': emptyProps(),
    'Remove Item': props<{ itemId: string }>(),
    'Change Item Amount': props<{ items: Array<[string, number]> }>(),
    'Get Discount Codes': props<{ ids: string[] }>(),
    'Remove Discount Code': props<{ discountId: string }>(),
  },
})
