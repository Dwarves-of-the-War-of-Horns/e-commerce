import type { MyCustomerUpdate } from '@commercetools/platform-sdk'

import type { ChangeAddressForm } from '../models/change-address-form.model'
import type { ChangeAddressSubmitForm } from '../types/change-address-submit-form.type'
import { addAddress } from './add-address.helper'
import { changeAddress } from './change-address.helper'

export const changeAddressSubmitForm: ChangeAddressSubmitForm = {
  changeAddress: ({ form, version, action, addressId }: ChangeAddressForm): MyCustomerUpdate =>
    changeAddress({ form, version, action, addressId }),
  addAddress: ({ form, version, action }: ChangeAddressForm): MyCustomerUpdate => addAddress({ form, version, action }),
}
