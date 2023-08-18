import { createReducer, on } from '@ngrx/store'

import type { AuthState } from '../model/auth-state.model'
import { signUpApiActions, signUpPageActions } from './auth.action'

const authInitialState: AuthState = {
  authData: null,
  isLoading: false,
  error: null,
}

export const authReducer = createReducer(
  authInitialState,
  on(signUpPageActions.signUp, state => ({
    ...state,
    isLoading: true,
  })),
  on(signUpApiActions.signUpSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    authData: action.customer,
  })),
  on(signUpApiActions.signUpFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
)
