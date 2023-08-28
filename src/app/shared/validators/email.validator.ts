import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { emailRegExp } from '../constants/regExp.constant'

export const emailValidator = (control: AbstractControl): ValidationErrors | null => {
  const isValid = emailRegExp.test(control.value as string)

  return isValid ? null : { error: 'Email should be in the following format: name@domain.com' }
}
