import type { SimpleProductPrices } from './simple-product-prices'

export interface CartProduct {
  id: string
  quantity: number
  totalPrice: number
  productId: string
  variantId: number
  productKey: string
  productName: string
  productImageUrl: string
  productPrices: SimpleProductPrices
  discountPerItem: number | undefined
}
