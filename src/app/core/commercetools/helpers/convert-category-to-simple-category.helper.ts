import type { Category } from '@commercetools/platform-sdk'

import { locale } from 'src/app/shared/constants/locale'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

export function convertCategoryToSimpleCategory(
  { id, key, name, slug, metaTitle, metaDescription }: Category,
  parentSlug: string[],
): SimpleCategory {
  return {
    id,
    key,
    name: name[locale],
    slug: slug[locale],
    slugArray: [...parentSlug, slug[locale]],
    metaTitle: metaTitle?.[locale] ?? '',
    metaDescription: metaDescription?.[locale] ?? '',
    children: [],
  }
}
