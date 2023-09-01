import { createActionGroup, emptyProps } from '@ngrx/store'

export const catalogPageActions = createActionGroup({
  source: 'Catalog Page',
  events: {
    'Init Categories': emptyProps(),
    'Get Products': emptyProps(),
  },
})
