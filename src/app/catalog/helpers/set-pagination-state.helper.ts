import { CatalogPagination } from '../enums/pagination.enum'
import type { PaginationState } from '../models/pagination-state.model'
import { calculatePaginationLength } from '../utils/calculate-pagination-length.util'
import { getChunk } from './get-chunk.helper'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export function setPaginationState(products: SimpleProduct[]): PaginationState {
  return {
    index: CatalogPagination.Index,
    length: calculatePaginationLength(products.length, CatalogPagination.QuantityProducts),
    paginationProducts: getChunk(products, CatalogPagination.Index, CatalogPagination.QuantityProducts),
    products,
  }
}
