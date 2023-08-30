import type { Category } from '@commercetools/platform-sdk'

import { convertCategoryToSimpleCategory } from './convert-category-to-simple-category.helper'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

export function arrayToTree(array: Category[], parentSlug: string[] = [], id?: string): SimpleCategory[] {
  return array
    .filter(category => category.parent?.id === id)
    .map(category => convertCategoryToSimpleCategory(category, parentSlug))
    .map(child => ({ ...child, children: arrayToTree(array, child.slugArray, child.id) }))
}
