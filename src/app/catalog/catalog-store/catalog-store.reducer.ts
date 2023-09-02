import { createReducer, on } from '@ngrx/store'

import type { CatalogState } from '../models/catalog-state.model'
import { catalogApiActions } from './actions/catalog-api.actions'
import { catalogPageActions } from './actions/catalog-page.actions'

const catalogInitialState: CatalogState = {
  isLoading: false,
  isProductsLoading: false,
  message: null,
  categories: null,
  products: [],
}

export const catalogReducer = createReducer(
  catalogInitialState,
  on(catalogPageActions.initCategories, state => ({
    ...state,
    isLoading: true,
  })),
  on(catalogApiActions.initCategoriesSuccess, (state, { categories }) => ({
    ...state,
    isLoading: false,
    categories,
  })),
  on(catalogApiActions.initCategoriesFailure, (state, { message }) => ({
    ...state,
    isLoading: false,
    message,
  })),
  on(catalogPageActions.getProducts, state => ({
    ...state,
    isProductsLoading: true,
  })),
  on(catalogApiActions.getProductsSuccess, (state, { products }) => ({
    ...state,
    isProductsLoading: false,
    products,
  })),
  on(catalogApiActions.getProductsFailure, (state, { message }) => ({
    ...state,
    isProductsLoading: false,
    message,
  })),
)
