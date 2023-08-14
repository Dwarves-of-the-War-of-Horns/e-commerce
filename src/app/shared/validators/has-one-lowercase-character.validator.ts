import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { lowerCharacterRegExp } from '../constants/regExp'

export const hasOneLowerCaseCharacter = (control: AbstractControl): ValidationErrors | null => {
  const isValid = lowerCharacterRegExp.test(control.value as string)

  return isValid ? null : { error: 'Must contain one or more lower character.' }
}
