import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { catalogPageActions } from '../actions/catalog-page.actions'
import { productDetailsPageActions } from '../actions/product-details-page.actions'
import {
  selectCategories,
  selectErrorMessage,
  selectFilterAttributes,
  selectFilterState,
  selectIsLoading,
  selectProductDetails,
  selectProductsData,
} from '../catalog-store.selectors'
import type { FilterParams } from 'src/app/shared/models/filter-params.model'

@Injectable()
export class CatalogFacade {
  public errorMessage$ = this.store$.select(selectErrorMessage)
  public isLoading$ = this.store$.select(selectIsLoading)
  public categories$ = this.store$.select(selectCategories)
  public productDetails$ = this.store$.select(selectProductDetails)
  public filterAttributes$ = this.store$.select(selectFilterAttributes)
  public productsData$ = this.store$.select(selectProductsData)
  public filterState$ = this.store$.select(selectFilterState)

  constructor(private store$: Store) {}

  public initCategories(): void {
    this.store$.dispatch(catalogPageActions.initCategories())
  }

  public loadProducts(queryParams: FilterParams): void {
    this.store$.dispatch(catalogPageActions.loadProducts({ queryParams }))
  }

  public loadProductByKey(productKey: string): void {
    this.store$.dispatch(productDetailsPageActions.loadProductDetails({ productKey }))
  }

  public initFilters(): void {
    this.store$.dispatch(catalogPageActions.initFilters())
  }
}
