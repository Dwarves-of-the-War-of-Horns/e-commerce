import { inject } from '@angular/core'
import { type CanActivateFn, Router } from '@angular/router'
import { map } from 'rxjs'

import { AuthFacade } from 'src/app/auth/auth-store/auth.facade'

export const userGuard: CanActivateFn = () => {
  const facade = inject(AuthFacade)
  const router = inject(Router)

  return facade.isLoggedIn$.pipe(
    map(isLoggedIn => {
      if (isLoggedIn) {
        return isLoggedIn
      }

      router.navigate(['home']).catch(({ message }: Error) => message || null)

      return !isLoggedIn
    }),
  )
}
