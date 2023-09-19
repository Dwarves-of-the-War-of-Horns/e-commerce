import type { DiscountCode } from '@commercetools/platform-sdk'

import { locale } from 'src/app/shared/constants/locale'
import type { SimpleDiscounts } from 'src/app/shared/models/simple-discounts.model'

export const convertDiscountCodesToSimpleDiscounts = (discountCodesArray: DiscountCode[]): SimpleDiscounts =>
  discountCodesArray.reduce((acc: SimpleDiscounts, { id, description, code }) => {
    acc[id] = {
      description: description?.[locale] ?? '',
      code,
    }

    return acc
  }, {})
