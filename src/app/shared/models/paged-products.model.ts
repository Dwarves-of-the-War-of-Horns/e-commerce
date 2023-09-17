import type { SimpleProduct } from './simple-product.model'

export interface PagedProducts {
  pages: number
  products: SimpleProduct[]
}
