import { createReducer, on } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { cartApiActions } from './actions/cart-api.actions'
import { cartInitActions } from './actions/cart-init.actions'

const cartInitialState: CartState = {
  isLoading: false,
  error: null,
  currentCart: null,
}

export const cartReducer = createReducer(
  cartInitialState,
  on(cartInitActions.getCart, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartApiActions.loadCartSuccess, (state, { cart }) => ({
    ...state,
    isLoading: false,
    currentCart: cart,
  })),
  on(cartApiActions.loadCartFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(cartInitActions.createCart, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartApiActions.createCartSuccess, (state, { cart }) => ({
    ...state,
    isLoading: false,
    currentCart: cart,
  })),
  on(cartApiActions.createCartFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
)
