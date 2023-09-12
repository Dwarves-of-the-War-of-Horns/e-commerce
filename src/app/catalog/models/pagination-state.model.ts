import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export interface PaginationState {
  index: number
  length: number
  paginationProducts: SimpleProduct[]
  products: SimpleProduct[]
}
