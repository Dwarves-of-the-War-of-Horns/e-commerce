import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const selectCartFeature = createFeatureSelector<CartState>(StoreFeatureNames.Carts)

export const selectError = createSelector(selectCartFeature, ({ error }: CartState) => error)

export const selectCurrentCart = createSelector(selectCartFeature, ({ currentCart }: CartState) => currentCart)
