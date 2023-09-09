import type { Address } from '@commercetools/platform-sdk'

export interface UserAddressData {
  userAddressId: string | null | undefined
  userAddresses: Address[] | null
  defaultBillingAddressId: string | null
  defaultShippingAddressId: string | null
  userVersion: number | null
}
