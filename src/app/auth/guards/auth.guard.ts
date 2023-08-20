import { inject } from '@angular/core'
import type { CanActivateFn } from '@angular/router'
import { Store } from '@ngrx/store'
import { map } from 'rxjs'

import { selectIsLogined } from '../auth-store/auth.selectors'

export const authGuard: CanActivateFn = () => {
  const store = inject(Store)

  return store.select(selectIsLogined).pipe(map(isLogined => !isLogined))
}
