import type { Cart } from '@commercetools/platform-sdk'

import { convertLineItemToCartProduct } from './convert-line-item-to-cart-product.helper'
import type { SimpleCart } from 'src/app/shared/models/simple-cart.model'

export const convertCartToSimpleCart = ({ id, version, discountCodes, lineItems, totalPrice }: Cart): SimpleCart => ({
  id,
  version,
  discountCodes,
  totalPrice: totalPrice.centAmount / 100,
  products: lineItems.map(convertLineItemToCartProduct),
})
