import type { Routes } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
  },

  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./core/components/not-found/not-found.component').then(component => component.NotFoundComponent),
  },
]
