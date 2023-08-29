import type { Routes } from '@angular/router'

import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component'

export const catalogRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CatalogPageComponent,
    title: 'Catalog',
  },

  {
    path: 'details',
    loadChildren: () => import('../product-details/product-details.module').then(m => m.ProductDetailsModule),
  },
]
