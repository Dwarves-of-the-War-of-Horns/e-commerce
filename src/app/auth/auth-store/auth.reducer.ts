import { createReducer, on } from '@ngrx/store'

import type { AuthState } from '../model/auth-state.model'
import { signInApiActions } from './sign-in-api.actions'
import { signInPageActions } from './sign-in-page.actions'
import { signUpApiActions } from './sign-up-api.actions'
import { signUpPageActions } from './sign-up-page.actions'

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
  on(signUpApiActions.signUpSuccess, (state, { customer }) => ({
    ...state,
    isLogined: true,
    isLoading: false,
    authData: customer,
  })),
  on(signUpApiActions.signUpFailure, (state, { error }) => ({
    ...state,
    isLogined: false,
    isLoading: false,
    error,
  })),
  on(signInPageActions.signIn, state => ({
    ...state,
    isLoading: true,
  })),
  on(signInApiActions.signInSuccess, (state, { customer }) => ({
    ...state,
    isLogined: true,
    isLoading: false,
    authData: customer,
  })),
  on(signInApiActions.signInFailure, (state, { error }) => ({
    ...state,
    isLogined: false,
    isLoading: false,
    error,
  })),
)
