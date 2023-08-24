import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { countryRegExpDictionary } from '../dictionary/countryRegExpDictionary'
import { Country } from '../enum/country.enum'
import { FormFields } from '../enum/form-value.enum'

export const postalCodeValidator = (
  control: AbstractControl,
  fieldName = FormFields.Country,
): ValidationErrors | null => {
  const isValid = Boolean(control.value)

  if (!isValid) {
    return isValid ? null : { error: "The postcode can't be empty." }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const country = (control.parent?.value[fieldName] as string) ?? Country.Usa

  return countryRegExpDictionary[country.toLocaleLowerCase()](control.value as string)
}
