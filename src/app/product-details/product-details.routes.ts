import type { Routes } from '@angular/router'

import { ProductDetailsComponent } from './components/product-details/product-details.component'

export const productDetailsRoutes: Routes = [
  {
    path: ':id',
    component: ProductDetailsComponent,
  },
]
