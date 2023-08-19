import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { AuthState } from '../model/auth-state.model'

const authFeature = createFeatureSelector<AuthState>('auth')
export const selectError = createSelector(authFeature, (state: AuthState) => state.error)

export const selectIsLogined = createSelector(authFeature, (state: AuthState) => state.isLogined)
