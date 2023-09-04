import type { AttributeValue } from './attribute-value.model'

export interface SimpleAttribute {
  name: string
  label: string
  values: AttributeValue[]
}
