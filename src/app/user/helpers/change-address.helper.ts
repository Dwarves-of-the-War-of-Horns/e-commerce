import type { MyCustomerUpdate } from '@commercetools/platform-sdk'

import type { ChangeAddressForm } from '../models/change-address-form.model'
import type { UserAddress } from '../models/user-address.model'
import { convertCountryFormat } from 'src/app/shared/constants/convert-country-format.constant'

export const changeAddress = ({ form, version, action, addressId }: ChangeAddressForm): MyCustomerUpdate => {
  const submitForm = form.getRawValue() as UserAddress

  return {
    version,
    actions: [
      {
        action,
        addressId: addressId || '',
        address: {
          city: submitForm.city,
          postalCode: submitForm.postalCode,
          streetName: submitForm.streetName,
          country: convertCountryFormat[submitForm.country],
        },
      },
    ],
  }
}
