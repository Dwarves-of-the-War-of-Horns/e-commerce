import type { QueryParams } from './query-params.model'
import type { SimpleProduct } from './simple-product.model'

export interface ConvertedProductState {
  queryParams: QueryParams
  products: SimpleProduct[]
}
