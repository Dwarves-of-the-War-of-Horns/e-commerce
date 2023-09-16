import type { DiscountedLineItemPriceForQuantity, DiscountedPrice, LineItem, Price } from '@commercetools/platform-sdk'

import { locale } from 'src/app/shared/constants/locale'
import type { CartProduct } from 'src/app/shared/models/cart-product.model'

const defineDiscountedPrice = ({
  discountedPricePerQuantity,
  discounted,
}: {
  discountedPricePerQuantity: DiscountedLineItemPriceForQuantity[] | undefined
  discounted: DiscountedPrice | undefined
}): number | undefined => {
  if (discountedPricePerQuantity?.[0]?.discountedPrice) {
    return discountedPricePerQuantity[0].discountedPrice.value.centAmount / 100
  }

  if (discounted) {
    return discounted.value.centAmount / 100
  }

  return
}

const calculateDiscount = ({ discountedPrice }: DiscountedLineItemPriceForQuantity, prices: Price): number => {
  const originalPrice = prices?.discounted?.value?.centAmount ?? prices.value.centAmount

  return (originalPrice - discountedPrice.value.centAmount) / 100
}

export const convertLineItemToCartProduct = ({
  id,
  quantity,
  productId,
  productKey,
  variant,
  name,
  totalPrice,
  price,
  discountedPricePerQuantity,
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
    discounted: defineDiscountedPrice({
      discountedPricePerQuantity,
      discounted: price?.discounted,
    }),
  },
  discountPerItem: discountedPricePerQuantity?.[0]
    ? calculateDiscount(discountedPricePerQuantity[0], price)
    : undefined,
})
