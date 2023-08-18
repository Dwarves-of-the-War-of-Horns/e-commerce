import type { AbstractControl, ValidationErrors } from '@angular/forms'

export function hasNoSpaces(control: AbstractControl): ValidationErrors | null {
  const isValid = !((control.value as string).startsWith(' ') || (control.value as string).endsWith(' '))

  return isValid ? null : { error: 'The field cannot start and end with a space.' }
}
