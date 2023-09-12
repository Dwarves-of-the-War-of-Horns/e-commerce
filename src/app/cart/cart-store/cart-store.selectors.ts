import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const selectCartFeature = createFeatureSelector<CartState>(StoreFeatureNames.Cart)

export const selectError = createSelector(selectCartFeature, ({ error }: CartState) => error)

export const selectCurrentCart = createSelector(selectCartFeature, ({ currentCart }: CartState) => currentCart)

export const selectProductsInCart = createSelector(
  selectCartFeature,
  ({ currentCart }: CartState) => currentCart?.products,
)

export const selectIsLoading = createSelector(selectCartFeature, ({ isLoading }: CartState) => isLoading)

export const selectProductsCount = createSelector(
  selectCartFeature,
  ({ currentCart }: CartState) => currentCart?.totalProducts,
)
