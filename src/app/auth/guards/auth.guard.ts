import { inject, Injectable } from '@angular/core'
import { type CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, tap } from 'rxjs'

import { selectIsLogined } from '../auth-store/auth.selectors'

@Injectable()
export class AuthGuard {
  private store = inject(Store)
  private router = inject(Router)

  public canActivate: CanActivateFn = () =>
    this.store.select(selectIsLogined).pipe(
      map(isLogined => {
        return !isLogined
      }),
      tap(isLogined => {
        if (!isLogined) {
          void this.router.navigate(['home'])
        }
      }),
    )
}
