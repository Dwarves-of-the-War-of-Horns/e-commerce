import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { catalogPageActions } from '../actions/catalog-page.actions'
import { selectCategories, selectErrorMessage, selectIsLoading } from '../catalog-store.selectors'

@Injectable()
export class CatalogFacade {
  public errorMessage$ = this.store$.select(selectErrorMessage)
  public isLoading$ = this.store$.select(selectIsLoading)
  public categories$ = this.store$.select(selectCategories)
  constructor(private store$: Store) {}

  public initCategories(): void {
    this.store$.dispatch(catalogPageActions.initCategories())
  }
}
