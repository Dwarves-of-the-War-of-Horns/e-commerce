import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { catalogPageActions } from '../actions/catalog-page.actions'
import { selectCategories, selectErrorMessage, selectIsLoading, selectProducts } from '../catalog-store.selectors'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

@Injectable()
export class CatalogFacade {
  public errorMessage$ = this.store$.select(selectErrorMessage)
  public isLoading$ = this.store$.select(selectIsLoading)
  public categories$ = this.store$.select(selectCategories)
  public products$ = this.store$.select(selectProducts)
  constructor(private store$: Store) {}

  public initCategories(): void {
    this.store$.dispatch(catalogPageActions.initCategories())
  }

  public getProducts(category?: SimpleCategory | null): void {
    this.store$.dispatch(catalogPageActions.getProducts())
  }
}
