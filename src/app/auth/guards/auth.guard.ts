import { inject, Injectable } from '@angular/core'
import { type CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { filter, map, mergeMap } from 'rxjs'

import { selectIsLoading, selectIsLogined } from '../auth-store/auth.selectors'

@Injectable()
export class AuthGuard {
  private store = inject(Store)
  private router = inject(Router)

  public canActivate: CanActivateFn = () =>
    this.store.select(selectIsLoading).pipe(
      filter(isLoading => !isLoading),
      mergeMap(() => this.store.select(selectIsLogined)),
      map(isLogined => {
        if (isLogined) {
          void this.router.navigate(['home'])

          return true
        }

        return !isLogined
      }),
    )
}
