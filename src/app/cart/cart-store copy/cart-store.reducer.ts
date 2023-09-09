import { createReducer, on } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { createCartsApiActions } from './actions/cart-create.api.action'
import { cartsInitActions } from './actions/carts-init.actions'
import { cartsApiActions } from './actions/carts-init.api.actions'

const cartInitialState: CartState = {
  isLoading: false,
  error: null,
  carts: null,
  currentCart: null,
}

export const cartReducer = createReducer(
  cartInitialState,
  on(cartsInitActions.getCarts, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartsApiActions.cartsLoadSuccess, (state, { carts }) => ({
    ...state,
    isLoading: false,
    carts,
    currentCart: carts.results[carts.count - 1] || null,
  })),
  on(cartsApiActions.cartsLoadFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(createCartsApiActions.createCartLoadSuccess, state => ({
    ...state,
    isLoading: true,
  })),
  on(createCartsApiActions.createCartLoadSuccess, (state, { cart }) => ({
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
  on(cartsApiActions.cartsLoadFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
)
