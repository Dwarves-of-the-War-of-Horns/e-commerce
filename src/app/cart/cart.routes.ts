import type { Routes } from '@angular/router'

import { CartPageComponent } from './cart-page.component'

export const cartRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CartPageComponent,
    title: 'Cart',
  },
]
