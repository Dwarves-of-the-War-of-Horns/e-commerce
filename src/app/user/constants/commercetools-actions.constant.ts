import type { CommercetoolsActions } from '../models/commercetools-action.model'

export const commercetoolsActions: CommercetoolsActions = {
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
