import { countryRegExpDictionary } from './countryRegExp.util'

describe('countryRegExpDictionary', () => {
  it('should validate a valid USA postcode', () => {
    const validUsaPostcode = '12345'
    const validator = countryRegExpDictionary['usa']
    const result = validator(validUsaPostcode)
    expect(result).toBeNull()
  })

  it('should validate a valid USA postcode with a hyphen', () => {
    const validUsaPostcode = '12345-6789'
    const validator = countryRegExpDictionary['usa']
    const result = validator(validUsaPostcode)
    expect(result).toBeNull()
  })

  it('should not validate an invalid USA postcode', () => {
    const invalidUsaPostcode = 'ABCDE'
    const validator = countryRegExpDictionary['usa']
    const result = validator(invalidUsaPostcode)
    expect(result).toEqual({ error: 'The postcode U.S. should match 12345 or 12345-6789.' })
  })

  it('should validate a valid Canada postcode', () => {
    const validCanadaPostcode = 'A1B 2C3'
    const validator = countryRegExpDictionary['canada']
    const result = validator(validCanadaPostcode)
    expect(result).toBeNull()
  })

  it('should not validate an invalid Canada postcode', () => {
    const invalidCanadaPostcode = '12345'
    const validator = countryRegExpDictionary['canada']
    const result = validator(invalidCanadaPostcode)
    expect(result).toEqual({ error: 'The postcode Canada should match A1B 2C3.' })
  })
})
