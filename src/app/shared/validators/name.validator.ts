import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { nameRegExp } from '../constants/regExp'

export const nameValidator = (control: AbstractControl): ValidationErrors | null => {
  const isValid = nameRegExp.test(control.value as string)

  return isValid ? null : { error: 'Must contain only latin characters and no special characters or numbers.' }
}
