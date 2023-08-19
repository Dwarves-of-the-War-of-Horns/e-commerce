import { createReducer, on } from '@ngrx/store'

import type { AuthState } from '../model/auth-state.model'
import { signInApiActions, signInPageActions, signUpApiActions, signUpPageActions } from './auth.action'

const authInitialState: AuthState = {
  isLogined: false,
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
    isLogined: true,
    isLoading: false,
    authData: action.customer,
  })),
  on(signUpApiActions.signUpFailure, (state, action) => ({
    ...state,
    isLogined: false,
    isLoading: false,
    error: action.error,
  })),
  on(signInPageActions.signIn, state => ({
    ...state,
    isLoading: true,
  })),
  on(signInApiActions.signInSuccess, (state, action) => ({
    ...state,
    isLogined: true,
    isLoading: false,
    authData: action.customer,
  })),
  on(signInApiActions.signInFailure, (state, action) => ({
    ...state,
    isLogined: false,
    isLoading: false,
    error: action.error,
  })),
)
