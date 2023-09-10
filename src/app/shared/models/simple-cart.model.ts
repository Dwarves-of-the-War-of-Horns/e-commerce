import type { DiscountCodeInfo } from '@commercetools/platform-sdk'

import type { CartProduct } from './cart-product.model'

export interface SimpleCart {
  id: string
  version: number
  discountCodes: DiscountCodeInfo[]
  products: CartProduct[]
  totalPrice: number
}
