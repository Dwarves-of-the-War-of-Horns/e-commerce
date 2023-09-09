import type { MyCustomerUpdate } from '@commercetools/platform-sdk'

import type { ChangeAddressForm } from '../models/change-address-form.model'
import type { AddressActionSubmitForm } from './address-action-submit-form.type'

export type ChangeAddressSubmitForm = Record<
  AddressActionSubmitForm,
  ({ form, version, action, addressId }: ChangeAddressForm) => MyCustomerUpdate
>
