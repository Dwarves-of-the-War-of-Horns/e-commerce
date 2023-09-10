import { createReducer, on } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { createCartActions } from './actions/cart-create.action'
import { createCartApiActions } from './actions/cart-create.api.action'
import { cartInitActions } from './actions/cart-init.actions'
import { cartApiActions } from './actions/cart-init.api.actions'

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
  on(cartApiActions.cartLoadSuccess, (state, { cart }) => ({
    ...state,
    isLoading: false,
    currentCart: cart,
  })),
  on(cartApiActions.cartLoadFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(createCartActions.createCart, state => ({
    ...state,
    isLoading: true,
  })),
  on(createCartApiActions.createCartSuccess, (state, { cart }) => ({
    ...state,
    isLoading: false,
    currentCart: cart,
  })),
  on(createCartApiActions.createCartFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
)
