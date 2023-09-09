import { FormControl, FormGroup } from '@angular/forms'
import type { Customer, MyCustomerUpdate } from '@commercetools/platform-sdk'

import { changeInformationSubmitForm } from './change-information-submit-form.helper'

describe('changeInformationSubmitForm', () => {
  it('should transform form values into MyCustomerUpdate with changed fields', () => {
    const customer: Customer = {
      dateOfBirth: '1990-01-01',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john@example.com',
      version: 1,
      id: '12345',
      createdAt: '2023-09-04T00:00:00Z',
      lastModifiedAt: '2023-09-04T00:00:00Z',
      isEmailVerified: true,
      addresses: [],
      authenticationMode: 'Password',
    }

    const form = new FormGroup({
      firstName: new FormControl('Alice'),
      lastName: new FormControl('Smith'),
      email: new FormControl('alice@example.com'),
      dateOfBirth: new FormControl('1995-05-05'),
    })

    const result = changeInformationSubmitForm(form, customer)

    const expected: MyCustomerUpdate = {
      version: 1,
      actions: [
        { action: 'setFirstName', firstName: 'Alice' },
        { action: 'setLastName', lastName: 'Smith' },
        { action: 'setDateOfBirth', dateOfBirth: '1995-05-05' },
        { action: 'changeEmail', email: 'alice@example.com' },
      ],
    }

    expect(result).toEqual(expected)
  })

  it('should transform form values into MyCustomerUpdate with no changes', () => {
    const customer: Customer = {
      dateOfBirth: '1990-01-01',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john@example.com',
      version: 2,
      id: '12345',
      createdAt: '2023-09-04T00:00:00Z',
      lastModifiedAt: '2023-09-04T00:00:00Z',
      isEmailVerified: true,
      addresses: [],
      authenticationMode: 'Password',
    }

    const form = new FormGroup({
      firstName: new FormControl('John'),
      lastName: new FormControl('Doe'),
      email: new FormControl('john@example.com'),
      dateOfBirth: new FormControl('1990-01-01'),
    })

    const result = changeInformationSubmitForm(form, customer)

    const expected: MyCustomerUpdate = {
      version: 2,
      actions: [],
    }

    expect(result).toEqual(expected)
  })
})
