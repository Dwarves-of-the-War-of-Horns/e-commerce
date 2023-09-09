import { inject } from '@angular/core'
import { type ResolveFn, Router } from '@angular/router'

import { CatalogFacade } from '../catalog-store/services/catalog.facade'

export const productResolver: ResolveFn<boolean> = () => {
  const catalogFacade = inject(CatalogFacade)
  const router = inject(Router)

  const { errorMessage$ } = catalogFacade

  errorMessage$.subscribe(errorMessage => {
    if (errorMessage) {
      router.navigate(['not-found'], { replaceUrl: true }).catch(({ message }: Error) => message || null)
    }
  })

  return true
}
