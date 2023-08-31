import { createActionGroup, props } from '@ngrx/store'

import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

export const catalogApiActions = createActionGroup({
  source: 'Catalog API',
  events: {
    'Init Categories Success': props<{ categories: SimpleCategory[] }>(),
    'Init Categories Failure': props<{ message: string }>(),
  },
})
