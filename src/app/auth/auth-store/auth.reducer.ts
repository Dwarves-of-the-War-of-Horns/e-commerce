import { createReducer, on } from '@ngrx/store'

import type { AuthState } from '../models/auth-state.model'
import { authInitApiActions } from './actions/auth-init-api.actions'
import { authInitActions } from './actions/auth-init.actions'
import { logoutActions } from './actions/logout.actions'
import { signInApiActions } from './actions/sign-in-api.actions'
import { signInPageActions } from './actions/sign-in-page.actions'
import { signUpApiActions } from './actions/sign-up-api.actions'
import { signUpPageActions } from './actions/sign-up-page.actions'

const authInitialState: AuthState = {
  isLoggedIn: false,
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
    isLoggedIn: true,
    isLoading: false,
    authData: customer,
  })),
  on(signUpApiActions.signUpFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
    error,
  })),
  on(signInPageActions.signIn, state => ({
    ...state,
    isLoading: true,
  })),
  on(signInApiActions.signInSuccess, (state, { customer }) => ({
    ...state,
    isLoggedIn: true,
    isLoading: false,
    authData: customer,
  })),
  on(signInApiActions.signInFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
    error,
  })),
  on(authInitActions.getCustomer, state => ({
    ...state,
    isLoading: true,
  })),
  on(authInitApiActions.getCustomerSuccess, (state, { customer }) => ({
    ...state,
    isLoggedIn: true,
    isLoading: false,
    authData: customer,
  })),
  on(authInitApiActions.getCustomerFailure, state => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
  })),
  on(logoutActions.logoutFinish, state => ({
    ...state,
    isLoggedIn: false,
    authData: null,
  })),
)
