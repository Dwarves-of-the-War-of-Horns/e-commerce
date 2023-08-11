import { Component } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { TuiDay } from '@taiga-ui/cdk'

import { birthValidator } from '../../../shared/validators/birth.validator'
import { emailValidator } from '../../../shared/validators/email.validator'
import { hasOneCharacter } from '../../../shared/validators/has-one-character.validator'
import { hasOneLowerCaseCharacter } from '../../../shared/validators/has-one-lowercase-character.validator'
import { hasOneUpperCaseCharacter } from '../../../shared/validators/has-one-uppercase-character.validator'
import { minCharacterValidator } from '../../../shared/validators/min-character.validator'
import { nameValidator } from '../../../shared/validators/name.validator'
import { postalCodeValidator } from '../../../shared/validators/postal-code.validator'

@Component({
  selector: 'ec-sing-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SingUpFormComponent {
  public countryArray = ['U.S.', 'Canada']
  public country = this.countryArray[0]
  public singUpForm = this.fb.group({
    email: new FormControl<string | null>('', [
      control => hasOneCharacter(control),
      controls => emailValidator(controls),
    ]),
    firstName: new FormControl<string | null>('', [
      control => hasOneCharacter(control),
      control => nameValidator(control),
    ]),
    lastName: new FormControl<string | null>('', [
      control => hasOneCharacter(control),
      control => nameValidator(control),
    ]),
    password: new FormControl<string | null>('', [
      control => minCharacterValidator(control),
      control => hasOneUpperCaseCharacter(control),
      control => hasOneLowerCaseCharacter(control),
    ]),
    date: new FormControl<TuiDay | null>(new TuiDay(2010, 1, 1), [control => birthValidator(control)]),
    street: new FormControl<string | null>('', [control => hasOneCharacter(control)]),
    city: new FormControl<string | null>('', [control => hasOneCharacter(control), control => nameValidator(control)]),
    postalCode: new FormControl<string | null>('', [control => postalCodeValidator(control)]),
    country: new FormControl(this.countryArray[0]),
    defaultBillingAddress: new FormControl(true),
    defaultShippingAddress: new FormControl(false),
  })
  constructor(private fb: FormBuilder) {}

  updatePostalCodeValidation = (): void => {
    this.singUpForm.controls.postalCode.updateValueAndValidity()
  }
}
