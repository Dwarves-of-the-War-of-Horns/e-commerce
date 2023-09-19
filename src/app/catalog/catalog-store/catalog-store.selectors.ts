import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { CatalogState } from '../models/catalog-state.model'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const selectCatalogFeature = createFeatureSelector<CatalogState>(StoreFeatureNames.Catalog)

export const selectErrorMessage = createSelector(selectCatalogFeature, ({ message }: CatalogState) => message)

export const selectIsLoading = createSelector(selectCatalogFeature, ({ isLoading }: CatalogState) => isLoading)

export const selectCategories = createSelector(selectCatalogFeature, ({ categories }: CatalogState) => categories)

export const selectProductsData = createSelector(
  selectCatalogFeature,
  ({ products, isProductsLoading }: CatalogState) => ({ products, isProductsLoading }),
)

export const selectProductDetails = createSelector(
  selectCatalogFeature,
  ({ productDetails }: CatalogState) => productDetails,
)

export const selectFilterAttributes = createSelector(
  selectCatalogFeature,
  ({ filterAttributes }: CatalogState) => filterAttributes,
)

export const selectPages = createSelector(selectCatalogFeature, ({ pages }: CatalogState) => pages)
