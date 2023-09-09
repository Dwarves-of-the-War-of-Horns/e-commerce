import type { FormGroup } from '@angular/forms'
import type { Customer, MyCustomerUpdate, MyCustomerUpdateAction } from '@commercetools/platform-sdk'

import { commercetoolsActions } from '../constants/commercetools-actions.constant'
import type { UserInformation } from '../models/user-information.model'

export const transformInformationSubmitForm = (
  form: FormGroup,
  { dateOfBirth, lastName, firstName, email, version }: Customer,
): MyCustomerUpdate => {
  const submitForm = form.getRawValue() as UserInformation
  const actions: MyCustomerUpdateAction[] = []

  if (submitForm.firstName !== firstName) {
    actions.push({ action: commercetoolsActions.firstName, firstName: submitForm.firstName })
  }

  if (submitForm.lastName !== lastName) {
    actions.push({
      action: commercetoolsActions.lastName,
      lastName: submitForm.lastName,
    })
  }

  if (submitForm.dateOfBirth.toString('YMD', '-') !== dateOfBirth) {
    const action = {
      action: commercetoolsActions.dateOfBirth,
      dateOfBirth: submitForm.dateOfBirth.toString('YMD', '-'),
    }
    actions.push(action)
  }

  if (submitForm.email !== email) {
    actions.push({ action: commercetoolsActions.email, email: submitForm.email })
  }

  return {
    version,
    actions,
  }
}
