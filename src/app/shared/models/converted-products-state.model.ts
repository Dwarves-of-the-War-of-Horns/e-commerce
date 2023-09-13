import type { FilterParams } from './filter-params.model'
import type { SimpleProduct } from './simple-product.model'

export interface ConvertedProductState {
  filterParams: FilterParams
  products: SimpleProduct[]
}
