import { createReducer, on } from '@ngrx/store'

import type { CartState } from '../models/cart-state'
import { cartApiActions } from './actions/cart-api.actions'
import { cartInitActions } from './actions/cart-init.actions'
import { cartPageActions } from './actions/cart-page.actions'
import { catalogPageCartActions } from './actions/catalog-page.actions'
import { homePageCartActions } from './actions/home-page.actions'

const cartInitialState: CartState = {
  isLoading: false,
  error: null,
  currentCart: null,
  discounts: {},
  isDiscountsLoading: false,
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
  on(catalogPageCartActions.addProduct, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartApiActions.updateCartSuccess, (state, { cart }) => ({
    ...state,
    isLoading: false,
    currentCart: cart,
  })),
  on(cartApiActions.updateCartFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(catalogPageCartActions.removeProduct, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartPageActions.removeItem, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartPageActions.clearCart, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartPageActions.changeItemAmount, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartPageActions.getDiscountCodes, state => ({
    ...state,
    isDiscountsLoading: true,
  })),
  on(cartApiActions.loadDiscountsSuccess, (state, { discounts }) => ({
    ...state,
    isDiscountsLoading: false,
    discounts,
  })),
  on(cartApiActions.loadDiscountsFailure, (state, { error }) => ({
    ...state,
    isDiscountsLoading: false,
    error,
  })),
  on(cartPageActions.removeDiscountCode, state => ({
    ...state,
    isLoading: true,
  })),
  on(cartPageActions.addDiscountCode, state => ({
    ...state,
    isLoading: true,
  })),
  on(homePageCartActions.getAllDiscountCodes, state => ({
    ...state,
    isDiscountsLoading: true,
  })),
)
