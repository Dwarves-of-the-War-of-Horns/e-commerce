import type { CartProduct } from './cart-product.model'

export interface SimpleCart {
  id: string
  version: number
  discountCodes: Array<{ isActive: boolean; id: string }>
  products: CartProduct[]
  totalPrice: number
  totalProducts: number
}
