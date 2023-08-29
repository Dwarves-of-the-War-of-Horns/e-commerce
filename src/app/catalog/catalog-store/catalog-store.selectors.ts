import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { CatalogState } from '../models/catalog-state.model'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const selectCatalogFeature = createFeatureSelector<CatalogState>(StoreFeatureNames.Catalog)

export const selectErrorMessage = createSelector(selectCatalogFeature, ({ message }: CatalogState) => message)

export const selectIsLoading = createSelector(selectCatalogFeature, ({ isLoading }: CatalogState) => isLoading)

export const selectCategories = createSelector(selectCatalogFeature, ({ categories }: CatalogState) => categories)
