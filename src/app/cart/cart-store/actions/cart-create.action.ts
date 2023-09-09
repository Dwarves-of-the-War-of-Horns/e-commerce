import { createActionGroup, emptyProps } from '@ngrx/store'

export const createCartActions = createActionGroup({
  source: 'Create Cart',
  events: {
    'Create Cart': emptyProps(),
  },
})
