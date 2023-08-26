import type { TuiDay } from '@taiga-ui/cdk'

/* eslint-disable @typescript-eslint/naming-convention */
export interface SignUpSubmitForm {
  email: string
  firstName: string
  lastName: string
  password: string
  dateOfBirth: TuiDay
  street: string
  city: string
  postalCode: string
  country: string
  billingStreet: string
  billingCity: string
  billingPostalCode: string
  billingCountry: string
  copyAddressCheckbox: boolean
  defaultShippingAddress: boolean
  defaultBillingAddress: boolean
}
