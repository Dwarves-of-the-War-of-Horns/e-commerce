import type { Routes } from '@angular/router'

import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component'
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component'
import { productResolver } from './resolver/product.resolver'

export const catalogRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CatalogPageComponent,
    title: 'Catalog',
  },
  {
    path: 'category/:category',
    component: CatalogPageComponent,
    title: 'Catalog',
  },

  {
    path: 'product/:key',
    component: ProductDetailsPageComponent,
    title: 'Product Details',
    resolve: { product: productResolver },
  },
]
