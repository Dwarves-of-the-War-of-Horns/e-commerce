import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const catalogPageActions = createActionGroup({
  source: 'Catalog Page',
  events: {
    'Init Categories': emptyProps(),
    'Load Products': props<{ category?: string }>(),
    'Init Filters': emptyProps(),
  },
})
