import type { Routes } from '@angular/router'

import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'

export const catalogRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CatalogPageComponent,
    title: 'Catalog',
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
  },
]
