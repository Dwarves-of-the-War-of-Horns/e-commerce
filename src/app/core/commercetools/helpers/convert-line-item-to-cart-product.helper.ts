import type { LineItem } from '@commercetools/platform-sdk'

import { locale } from 'src/app/shared/constants/locale'
import type { CartProduct } from 'src/app/shared/models/cart-product.model'

export const convertLineItemToCartProduct = ({
  id,
  quantity,
  productId,
  productKey,
  variant,
  name,
  totalPrice,
  price,
}: LineItem): CartProduct => ({
  id,
  quantity,
  totalPrice: totalPrice.centAmount / 100,
  productId,
  productKey: productKey ?? '',
  variantId: variant.id,
  productImageUrl: variant?.images?.[0]?.url ?? '',
  productName: name[locale],
  productPrices: {
    default: price.value.centAmount / 100,
    discounted: price?.discounted?.value?.centAmount ? price.discounted.value.centAmount / 100 : undefined,
  },
})
