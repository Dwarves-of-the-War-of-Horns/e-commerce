import { createReducer, on } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { createCartApiActions } from './actions/cart-create.api.action'
import { cartInitActions } from './actions/cart-init.actions'
import { cartApiActions } from './actions/cart-init.api.actions'

const cartInitialState: CartState = {
  isLoading: false,
  error: null,
  carts: null,
  currentCart: null,
}

export const cartReducer = createReducer(
  cartInitialState,
  on(cartInitActions.getCart, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartApiActions.cartLoadSuccess, (state, { carts }) => ({
    ...state,
    isLoading: false,
    carts,
    currentCart: carts.results[carts.count - 1] || null,
  })),
  on(cartApiActions.cartLoadFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(createCartApiActions.createCartSuccess, state => ({
    ...state,
    isLoading: true,
  })),
  on(createCartApiActions.createCartSuccess, (state, { cart }) => ({
    ...state,
    isLoading: false,
    carts: {
      limit: 20,
      offset: 0,
      count: 1,
      total: 1,
      results: [cart],
    },
    currentCart: cart,
  })),
  on(cartApiActions.cartLoadFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
)
