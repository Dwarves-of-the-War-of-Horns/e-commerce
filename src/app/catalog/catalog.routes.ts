import type { Routes } from '@angular/router'

import { CatalogPageComponent } from './catalog-page.component'

export const catalogRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CatalogPageComponent,
    title: 'Catalog',
  },
]
