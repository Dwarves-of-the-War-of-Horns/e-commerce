import type { Routes } from '@angular/router'

import { UserComponent } from './user.component'

export const userRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserComponent,
  },
]
