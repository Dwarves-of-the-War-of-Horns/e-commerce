import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { upperCharacterRegExp } from '../constants/regExp'

export const hasOneUpperCaseCharacter = (control: AbstractControl): ValidationErrors | null => {
  const isValid = upperCharacterRegExp.test(control.value as string)

  return isValid ? null : { error: 'Must contain one or more uppercase character.' }
}
