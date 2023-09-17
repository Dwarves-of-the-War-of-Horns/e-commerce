import { createActionGroup, emptyProps, props } from '@ngrx/store'

import type { QueryParams } from 'src/app/shared/models/query-params.model'

export const catalogPageActions = createActionGroup({
  source: 'Catalog Page',
  events: {
    'Init Categories': emptyProps(),
    'Load Products': props<{ page: number; queryParams: QueryParams }>(),
    'Init Filters': emptyProps(),
  },
})
