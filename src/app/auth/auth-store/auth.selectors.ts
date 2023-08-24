import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { AuthState } from '../model/auth-state.model'
import { StoreFeatureNames } from 'src/app/shared/enum/store-feature-names.enum'

const authFeature = createFeatureSelector<AuthState>(StoreFeatureNames.Auth)

export const selectError = createSelector(authFeature, ({ error }: AuthState) => error)

export const selectIsLogined = createSelector(authFeature, ({ isLogined }: AuthState) => isLogined)

export const selectIsLoading = createSelector(authFeature, ({ isLoading }: AuthState) => isLoading)
