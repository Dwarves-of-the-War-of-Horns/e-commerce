import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { AuthState } from '../model/auth-state.model'
import { StoreFeatureNames } from 'src/app/shared/enum/store-feature-names.enum'

const authFeature = createFeatureSelector<AuthState>(StoreFeatureNames.Auth)

export const selectError = createSelector(authFeature, (state: AuthState) => state.error)

export const selectIsLogined = createSelector(authFeature, (state: AuthState) => state.isLogined)

export const selectIsLoading = createSelector(authFeature, (state: AuthState) => state.isLoading)
