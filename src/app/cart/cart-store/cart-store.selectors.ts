import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const selectAuthFeature = createFeatureSelector<CartState>(StoreFeatureNames.Carts)

export const selectError = createSelector(selectAuthFeature, ({ error }: CartState) => error)

export const selectCurrentCart = createSelector(selectAuthFeature, ({ currentCart }: CartState) => currentCart)
