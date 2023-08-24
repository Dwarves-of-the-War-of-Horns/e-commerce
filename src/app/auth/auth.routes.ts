import type { Routes } from '@angular/router'

import { authGuard } from './guards/auth.guard'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in',
      },

      {
        path: 'sign-in',
        title: 'Sign-in',
        component: SignInComponent,
        canMatch: [authGuard],
      },

      {
        path: 'sign-up',
        title: 'Sign-up',
        component: SignUpComponent,
        canMatch: [authGuard],
      },
    ],
  },
]
