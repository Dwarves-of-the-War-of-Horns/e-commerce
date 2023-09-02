import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const catalogPageActions = createActionGroup({
  source: 'Catalog Page',
  events: {
    'Init Categories': emptyProps(),
    'Get Products': props<{ category?: string }>(),
  },
})
