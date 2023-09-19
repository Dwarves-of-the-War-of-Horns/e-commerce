import type { AbstractControl, ValidationErrors } from '@angular/forms'

import { Country } from '../enums/country.enum'
import { FormFields } from '../enums/form-value.enum'
import { countryRegExpDictionary } from '../utils/countryRegExp.util'

export const postalCodeValidator = (
  control: AbstractControl,
  fieldName = FormFields.Country,
): ValidationErrors | null => {
  const isValid = Boolean(control.value)

  if (!isValid) {
    return isValid ? null : { error: "The postcode can't be empty" }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const country = (control.parent?.value[fieldName] as string) ?? Country.Usa

  return countryRegExpDictionary[country.toLocaleLowerCase()](control.value as string)
}
