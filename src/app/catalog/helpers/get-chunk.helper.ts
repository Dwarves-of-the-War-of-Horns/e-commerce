import { equalChunk } from '../utils/equal-chunk.util'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export function getChunk(products: SimpleProduct[], index: number, quantity: number): SimpleProduct[] {
  const [start, end] = equalChunk(index, quantity)

  return products.slice(start, end)
}
