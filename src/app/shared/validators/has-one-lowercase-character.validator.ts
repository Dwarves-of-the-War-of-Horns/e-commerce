import type { AbstractControl, ValidationErrors } from '@angular/forms'

export const hasOneLowerCaseCharacter = (control: AbstractControl): ValidationErrors | null => {
  const isValid = (control.value as string).toUpperCase() === (control.value as string)

  return isValid ? { error: 'Must contain one or more lower character.' } : null
}
