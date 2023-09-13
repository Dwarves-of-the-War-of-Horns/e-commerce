import { createActionGroup, props } from '@ngrx/store'

import type { ConvertedProductState } from 'src/app/shared/models/converted-products-state.model'
import type { SimpleAttribute } from 'src/app/shared/models/simple-attribute.model'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

export const catalogApiActions = createActionGroup({
  source: 'Catalog API',
  events: {
    'Init Categories Success': props<{ categories: SimpleCategory[] }>(),
    'Init Categories Failure': props<{ message: string }>(),
    'Load Products Success': props<{ productsState: ConvertedProductState }>(),
    'Load Products Failure': props<{ message: string }>(),
    'Load Filter Attributes Success': props<{ filterAttributes: SimpleAttribute[] }>(),
    'Load Filter Attributes Failure': props<{ message: string }>(),
  },
})
