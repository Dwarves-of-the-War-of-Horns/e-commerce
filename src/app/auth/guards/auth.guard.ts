import { inject } from '@angular/core'
import { type CanActivateFn, Router } from '@angular/router'
import { filter, map, mergeMap } from 'rxjs'

import { AuthFacade } from '../auth-store/auth.facade'

export const authGuard: CanActivateFn = () => {
  const facade = inject(AuthFacade)
  const router = inject(Router)

  return facade.isLoading$.pipe(
    filter(isLoading => !isLoading),
    mergeMap(() => facade.isLoggedIn$),
    map(isLoggedIn => {
      if (isLoggedIn) {
        router.navigate(['home']).catch(({ message }: Error) => message || null)

        return true
      }

      return !isLoggedIn
    }),
  )
}
