import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { countryRegExpDictionary } from '../dictionary/countryRegExpDictionary'

export const postalCodeValidator = (control: AbstractControl): ValidationErrors | null => {
  const isValid = Boolean(control.value)

  if (!isValid) {
    return isValid ? null : { error: "The postcode can't be empty." }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const country = (control.parent?.value.country as string) ?? 'USA'

  return countryRegExpDictionary[country.toLocaleLowerCase()](control.value as string)
}
