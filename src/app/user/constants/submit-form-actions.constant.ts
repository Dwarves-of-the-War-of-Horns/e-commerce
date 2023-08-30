import type { SubmitFormActionDictionary } from '../models/submit-form-action-dictionary.model'

export const submitFormActionDictionary: SubmitFormActionDictionary = {
  firstName: 'setFirstName',
  lastName: 'setLastName',
  dateOfBirth: 'setDateOfBirth',
  changeAddress: 'changeAddress',
  removeAddress: 'removeAddress',
  addAddress: 'addAddress',
  email: 'changeEmail',
  shippingAddress: 'setDefaultShippingAddress',
  billingAddress: 'setDefaultBillingAddress',
}
