import type { AbstractControl, ValidationErrors } from '@angular/forms'

export const minCharacterValidator = (control: AbstractControl): ValidationErrors | null => {
  const isValid = (control.value as string).length >= 8 && (control.value as string).length <= 30

  return isValid ? null : { error: 'Must contain eight or more characters and no more thirty.' }
}
