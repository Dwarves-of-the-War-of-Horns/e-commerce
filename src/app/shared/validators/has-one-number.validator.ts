import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { numberRegExp } from '../constants/regExp'

export function hasOneNumber(control: AbstractControl): ValidationErrors | null {
  const isValid = numberRegExp.test(control.value as string)

  return isValid ? null : { error: 'Must contain one or more numbers.' }
}
