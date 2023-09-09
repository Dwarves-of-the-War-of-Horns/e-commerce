import { inject } from '@angular/core'
import { type CanMatchFn, Router } from '@angular/router'
import { filter, map, mergeMap } from 'rxjs'

import { AuthFacade } from '../auth-store/auth.facade'

export const authGuard: CanMatchFn = () => {
  const authFacade = inject(AuthFacade)
  const router = inject(Router)

  return authFacade.isLoading$.pipe(
    filter(isLoading => !isLoading),
    mergeMap(() => authFacade.isLoggedIn$),
    map(isLoggedIn => {
      if (isLoggedIn) {
        router.navigate(['home']).catch(({ message }: Error) => message || null)

        return true
      }

      return !isLoggedIn
    }),
  )
}
