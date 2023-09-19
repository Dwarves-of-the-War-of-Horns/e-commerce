import type { FormGroup } from '@angular/forms'
import type { MyCustomerDraft } from '@commercetools/platform-sdk'

import { convertCountryFormat } from '../../shared/constants/convert-country-format.constant'
import type { SignUpSubmitForm } from '../models/sign-up-submit-form.model'

export function transformRegistrationSubmitForm(form: FormGroup, addedAddress: boolean): MyCustomerDraft {
  const formValue = form.getRawValue() as SignUpSubmitForm

  const submitForm = {
    email: formValue.email,
    firstName: formValue.firstName,
    lastName: formValue.lastName,
    password: formValue.password,
    dateOfBirth: formValue.dateOfBirth.toString('YMD', '-'),
    defaultShippingAddress: formValue.defaultShippingAddress ? 0 : undefined,
    defaultBillingAddress: formValue.defaultBillingAddress && addedAddress ? 1 : undefined,
    addresses: [
      {
        street: formValue.street,
        city: formValue.city,
        postalCode: formValue.postalCode,
        country: convertCountryFormat[formValue.country],
      },
    ],
  }

  if (addedAddress) {
    submitForm.addresses.push({
      street: formValue.billingStreet,
      city: formValue.billingCity,
      postalCode: formValue.billingPostalCode,
      country: convertCountryFormat[formValue.billingCountry],
    })
  }

  if (submitForm.defaultBillingAddress === undefined) {
    delete submitForm.defaultBillingAddress
  }

  if (submitForm.defaultShippingAddress === undefined) {
    delete submitForm.defaultShippingAddress
  }

  if (formValue.copyAddressCheckbox && addedAddress) {
    submitForm.defaultBillingAddress = 0
  }

  return submitForm
}
