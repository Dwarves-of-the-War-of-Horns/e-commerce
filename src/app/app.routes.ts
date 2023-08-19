import type { Routes } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    title: 'Home',
  },

  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    title: 'Cart',
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    title: 'Authentication',
  },

  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
    title: 'Catalog',
  },

  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    title: 'About us',
  },
  {
    path: '**',
    loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Not found',
  },
]
