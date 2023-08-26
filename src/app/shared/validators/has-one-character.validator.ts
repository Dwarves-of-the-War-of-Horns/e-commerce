import type { AbstractControl, ValidationErrors } from '@angular/forms'

export function hasOneCharacter(control: AbstractControl): ValidationErrors | null {
  const isValid = (control.value as string).length >= 1 && (control.value as string).length <= 30

  return isValid ? null : { error: 'Must contain one or more characters and no more thirty.' }
}
