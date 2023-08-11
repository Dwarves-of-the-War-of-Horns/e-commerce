import type { AbstractControl, ValidationErrors } from '@angular/forms'

export const hasOneUpperCaseCharacter = (control: AbstractControl): ValidationErrors | null => {
  const isValid = (control.value as string).toLowerCase() === (control.value as string)

  return isValid ? { error: 'Must contain one or more uppercase character.' } : null
}
