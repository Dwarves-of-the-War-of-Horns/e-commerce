import type { QueryParams } from 'src/app/shared/models/query-params.model'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export interface ProductsState {
  queryState: QueryParams
  products: SimpleProduct[]
}
