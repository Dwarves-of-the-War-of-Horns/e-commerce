import { createActionGroup, props } from '@ngrx/store'

import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export const catalogApiActions = createActionGroup({
  source: 'Catalog API',
  events: {
    'Init Categories Success': props<{ categories: SimpleCategory[] }>(),
    'Init Categories Failure': props<{ message: string }>(),
    'Load Products Success': props<{ products: SimpleProduct[] }>(),
    'Load Products Failure': props<{ message: string }>(),
  },
})
