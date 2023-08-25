import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { AuthState } from '../model/auth-state.model'
import { StoreFeatureNames } from 'src/app/shared/enum/store-feature-names.enum'

const selectAuthFeature = createFeatureSelector<AuthState>(StoreFeatureNames.Auth)

export const selectError = createSelector(selectAuthFeature, ({ error }: AuthState) => error)

export const selectIsLoggedIn = createSelector(selectAuthFeature, ({ isLoggedIn }: AuthState) => isLoggedIn)

export const selectIsLoading = createSelector(selectAuthFeature, ({ isLoading }: AuthState) => isLoading)
