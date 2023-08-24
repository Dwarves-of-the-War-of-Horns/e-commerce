import type { Routes } from '@angular/router'

import { AboutPageComponent } from './about-page.component'

export const aboutRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'About us',
    component: AboutPageComponent,
  },
]
