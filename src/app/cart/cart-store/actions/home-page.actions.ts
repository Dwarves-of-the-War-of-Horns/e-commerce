import { createActionGroup, emptyProps } from '@ngrx/store'

export const homePageCartActions = createActionGroup({
  source: 'Home Page',
  events: {
    'Get All Discount Codes': emptyProps(),
  },
})
