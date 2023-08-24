import { inject } from '@angular/core'
import { type CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { filter, map, mergeMap } from 'rxjs'

import { selectIsLoading, selectIsLoggedIn } from '../auth-store/auth.selectors'

export const authGuard: CanActivateFn = () => {
  const store = inject(Store)
  const router = inject(Router)

  return store.select(selectIsLoading).pipe(
    filter(isLoading => !isLoading),
    mergeMap(() => store.select(selectIsLoggedIn)),
    map(isLoggedIn => {
      if (isLoggedIn) {
        router.navigate(['home']).catch(error => {
          if (error instanceof Error) {
            return error.message
          }

          return null
        })

        return true
      }

      return !isLoggedIn
    }),
  )
}
