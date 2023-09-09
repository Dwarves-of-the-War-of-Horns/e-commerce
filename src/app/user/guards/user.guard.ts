import { inject } from '@angular/core'
import { type CanMatchFn, Router, type UrlTree } from '@angular/router'
import { map } from 'rxjs'

import { AuthFacade } from 'src/app/auth/auth-store/service/auth.facade'

export const userGuard: CanMatchFn = () => {
  const authFacade = inject(AuthFacade)
  const router = inject(Router)

  return authFacade.isLoggedIn$.pipe(
    map((isLoggedIn): boolean | UrlTree => (isLoggedIn ? true : router.createUrlTree(['auth/sign-in']))),
  )
}
