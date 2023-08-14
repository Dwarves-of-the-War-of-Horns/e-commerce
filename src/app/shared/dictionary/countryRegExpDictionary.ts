import type { ValidationErrors } from '@angular/forms'

import { canadaRegExp, usRegExp } from '../constants/regExp'

export const countryRegExpDictionary: Record<string, (country: string) => ValidationErrors | null> = {
  usa: (country: string): ValidationErrors | null => {
    return usRegExp.test(country) ? null : { error: 'The postcode U.S. should match 12345 or 12345-6789.' }
  },
  canada: (country: string): ValidationErrors | null => {
    return canadaRegExp.test(country) ? null : { error: 'The postcode Canada should match A1B 2C3.' }
  },
}
