import type { FormGroup } from '@angular/forms'
import type { MyCustomerDraft } from '@commercetools/platform-sdk'

import { transformRegistrationSubmitForm } from './transform-registration-submit-form.util'

describe('transformRegistrationSubmitForm', () => {
  it('should transform registration submit form with default shipping address', () => {
    const formMock: Partial<FormGroup> = {
      getRawValue: () => ({
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'securePassword',
        dateOfBirth: new Date(2009, 1, 1).toISOString(),
        defaultShippingAddress: false,
        defaultBillingAddress: false,
        street: '123 Main St',
        city: 'City',
        postalCode: '12345',
        country: 'USA',
      }),
    }

    const result: MyCustomerDraft = transformRegistrationSubmitForm(formMock as FormGroup, false)

    expect(result).toEqual({
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'securePassword',
      dateOfBirth: new Date(2009, 1, 1).toISOString(),
      addresses: [
        {
          street: '123 Main St',
          city: 'City',
          postalCode: '12345',
          country: 'US',
        },
      ],
    })
  })

  it('should transform registration submit form with default billing address', () => {
    const formMock: Partial<FormGroup> = {
      getRawValue: () => ({
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'securePassword',
        dateOfBirth: new Date(2009, 1, 1).toISOString(),
        defaultShippingAddress: false,
        defaultBillingAddress: false,
        street: '123 Main St',
        city: 'City',
        postalCode: '12345',
        country: 'USA',
      }),
    }

    const result: MyCustomerDraft = transformRegistrationSubmitForm(formMock as FormGroup, false)

    expect(result).toEqual({
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'securePassword',
      dateOfBirth: new Date(2009, 1, 1).toISOString(),
      addresses: [
        {
          street: '123 Main St',
          city: 'City',
          postalCode: '12345',
          country: 'US',
        },
      ],
    })
  })
})
