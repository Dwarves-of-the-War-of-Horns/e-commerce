import type { ProductProjection } from '@commercetools/platform-sdk'

import { locale } from 'src/app/shared/constants/locale'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export const convertProductProjectionToSimpleProduct = ({
  name,
  description,
  slug,
  key,
  metaTitle,
  metaDescription,
  masterVariant,
  id,
}: ProductProjection): SimpleProduct => {
  const prices = masterVariant.prices?.[0]
  const { attributes } = masterVariant
  const defaultPrice = prices?.value?.centAmount
  const discountPrice = prices?.discounted?.value?.centAmount

  return {
    key: key ?? '',
    name: name[locale],
    id,
    variantId: masterVariant.id,
    description: description?.[locale] ?? '',
    slug: slug[locale],
    metaTitle: metaTitle?.[locale] ?? '',
    metaDescription: metaDescription?.[locale] ?? '',
    images: masterVariant.images?.map(image => image.url) ?? [],
    prices: {
      default: defaultPrice ? defaultPrice / 100 : 0,
      discounted: discountPrice ? discountPrice / 100 : undefined,
    },
    attributes: attributes ?? [],
  }
}
