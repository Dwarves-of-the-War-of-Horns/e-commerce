import { createActionGroup, props } from '@ngrx/store'

export const catalogPageCartActions = createActionGroup({
  source: 'Catalog Page',
  events: {
    'Add Product': props<{ productId: string; variantId: number }>(),
    'Remove Product': props<{ productId: string; variantId: number }>(),
  },
})
