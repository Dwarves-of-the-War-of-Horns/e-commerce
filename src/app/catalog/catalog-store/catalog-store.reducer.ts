import { createReducer, on } from '@ngrx/store'

import type { CatalogState } from '../models/catalog-state.model'
import { catalogApiActions } from './actions/catalog-api.actions'
import { catalogPageActions } from './actions/catalog-page.actions'
import { productDetailsApiActions } from './actions/product-details-api.actions'
import { productDetailsPageActions } from './actions/product-details-page.actions'

const catalogInitialState: CatalogState = {
  isLoading: false,
  isProductsLoading: false,
  message: null,
  categories: null,
  products: [],
  productDetails: null,
  filterAttributes: null,
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
  on(catalogPageActions.loadProducts, state => ({
    ...state,
    isProductsLoading: true,
  })),
  on(catalogApiActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    isProductsLoading: false,
    products,
  })),
  on(catalogApiActions.loadProductsFailure, (state, { message }) => ({
    ...state,
    isProductsLoading: false,
    message,
  })),
  on(productDetailsPageActions.loadProductDetails, state => ({
    ...state,
    isLoading: true,
  })),
  on(productDetailsApiActions.productDetailsLoadSuccess, (state, { productDetails }) => ({
    ...state,
    isLoading: false,
    productDetails,
  })),

  on(productDetailsApiActions.productDetailsLoadFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    message: errorMessage,
  })),
  on(catalogPageActions.initFilters, state => ({
    ...state,
    isLoading: true,
  })),
  on(catalogApiActions.loadFilterAttributesSuccess, (state, { filterAttributes }) => ({
    ...state,
    isLoading: false,
    filterAttributes,
  })),
  on(catalogApiActions.loadFilterAttributesFailure, (state, { message }) => ({
    ...state,
    isLoading: false,
    message,
  })),
)
