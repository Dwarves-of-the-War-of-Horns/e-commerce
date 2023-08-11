import type { AbstractControl, ValidationErrors } from '@angular/forms'
import type { TuiDay } from '@taiga-ui/cdk'

export const birthValidator = (control: AbstractControl): ValidationErrors | null => {
  const isValid = new Date().getFullYear() - (control.value as TuiDay).year <= 13

  return isValid ? null : { error: 'You should be 13 years old or older' }
}
