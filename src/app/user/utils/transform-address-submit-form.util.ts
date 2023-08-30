import type { MyCustomerUpdate } from '@commercetools/platform-sdk'

import type { TransformAddressSubmitForm } from '../models/transform-address-submit-form.model'
import type { UserAddress } from '../models/user-address.model'
import type { AddressActionSubmitForm } from '../types/address-action-submit-form.type'
import { convertCountryFormat } from 'src/app/shared/constants/convert-country-format.constant'

export const transformAddressSubmitForm: Record<
  AddressActionSubmitForm,
  ({ form, version, action, addressId }: TransformAddressSubmitForm) => MyCustomerUpdate
> = {
  changeAddress: ({ form, version, action, addressId }: TransformAddressSubmitForm): MyCustomerUpdate => {
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
  },
  addAddress: ({ form, version, action }: TransformAddressSubmitForm): MyCustomerUpdate => {
    const submitForm = form.getRawValue() as UserAddress

    return {
      version,
      actions: [
        {
          action,
          address: {
            city: submitForm.city,
            postalCode: submitForm.postalCode,
            streetName: submitForm.streetName,
            country: convertCountryFormat[submitForm.country],
          },
        },
      ],
    }
  },
}
