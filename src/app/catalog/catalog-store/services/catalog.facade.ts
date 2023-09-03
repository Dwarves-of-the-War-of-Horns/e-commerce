import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { catalogPageActions } from '../actions/catalog-page.actions'
import { productDetailsPageActions } from '../actions/product-details-page.actions'
import {
  selectCategories,
  selectErrorMessage,
  selectFilterAttributes,
  selectIsLoading,
  selectIsProductsLoading,
  selectProductDetails,
  selectProducts,
} from '../catalog-store.selectors'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

@Injectable()
export class CatalogFacade {
  public errorMessage$ = this.store$.select(selectErrorMessage)
  public isLoading$ = this.store$.select(selectIsLoading)
  public categories$ = this.store$.select(selectCategories)
  public products$ = this.store$.select(selectProducts)
  public isProductsLoading$ = this.store$.select(selectIsProductsLoading)
  public productDetails$ = this.store$.select(selectProductDetails)
  public filterAttributes$ = this.store$.select(selectFilterAttributes)
  constructor(private store$: Store) {}

  public initCategories(): void {
    this.store$.dispatch(catalogPageActions.initCategories())
  }

  public loadProducts(category?: SimpleCategory | null): void {
    const id = category?.id
    this.store$.dispatch(catalogPageActions.loadProducts({ category: id }))
  }

  public loadProductByKey(productKey: string): void {
    this.store$.dispatch(productDetailsPageActions.loadProductDetails({ productKey }))
  }

  public initFilters(): void {
    this.store$.dispatch(catalogPageActions.initFilters())
  }
}
