import { createActionGroup, emptyProps, props } from '@ngrx/store'

import type { FilterParams } from 'src/app/shared/models/filter-params.model'

export const catalogPageActions = createActionGroup({
  source: 'Catalog Page',
  events: {
    'Init Categories': emptyProps(),
    'Load Products': props<{ queryParams: FilterParams }>(),
    'Init Filters': emptyProps(),
  },
})
