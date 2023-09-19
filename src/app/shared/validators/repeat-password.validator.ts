import type { AbstractControl, ValidationErrors } from '@angular/forms'

export function repeatPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const repeatPassword = control.value as string
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const password = control.parent?.value.password as string

  const isValid = repeatPassword !== '' && repeatPassword === password

  return isValid ? null : { error: 'Passwords must match' }
}
