import { createActionGroup, props } from '@ngrx/store'

import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export const productDetailsApiActions = createActionGroup({
  source: 'Product Details Api',
  events: {
    'Product Details Load Success': props<{ productDetails: SimpleProduct }>(),
    'Product Details Load Failure': props<{ errorMessage: string }>(),
  },
})
