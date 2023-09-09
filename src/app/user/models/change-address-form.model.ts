import type { FormGroup } from '@angular/forms'

import type { AddressActionSubmitForm } from '../types/address-action-submit-form.type'

export interface ChangeAddressForm {
  form: FormGroup
  version: number
  action: AddressActionSubmitForm
  addressId: string | null | undefined
}
