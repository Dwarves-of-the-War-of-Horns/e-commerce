import type { AbstractControl, ValidationErrors } from '@angular/forms'
import type { TuiDay } from '@taiga-ui/cdk'

export const birthValidator = (control: AbstractControl): ValidationErrors | null => {
  const dateValue = control.value as TuiDay
  const dateNow = new Date()
  const isValidYear = dateNow.getFullYear() - dateValue?.year >= 13
  const isValidDate = dateNow.getMonth() + 1 + dateNow.getDate() > dateValue?.month + dateValue?.day

  return isValidYear && isValidDate ? null : { error: 'You should be 13 years old or older' }
}
