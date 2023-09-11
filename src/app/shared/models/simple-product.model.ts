import type { Attribute } from '@commercetools/platform-sdk'

import type { SimpleProductPrices } from './simple-product-prices'

export interface SimpleProduct {
  name: string
  slug: string
  key: string
  id: string
  variantId: number
  description: string
  metaTitle: string
  metaDescription: string
  images: string[]
  prices: SimpleProductPrices
  attributes: Attribute[]
}
