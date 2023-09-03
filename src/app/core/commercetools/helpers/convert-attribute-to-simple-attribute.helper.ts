import type { AttributeDefinition, AttributeType } from '@commercetools/platform-sdk'

import { locale } from 'src/app/shared/constants/locale'
import type { SimpleAttribute } from 'src/app/shared/models/simple-attribute.model'

const getValues = (type: AttributeType): Array<{ key: string; label: string }> => {
  if (type.name === 'enum') {
    return type.values
  }

  if (type.name === 'set') {
    return getValues(type.elementType)
  }

  return []
}

export const convertAttributeToSimpleAttribute = ({ name, label, type }: AttributeDefinition): SimpleAttribute => ({
  name,
  label: label[locale],
  values: getValues(type),
})
