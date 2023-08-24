import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { TuiDay } from '@taiga-ui/cdk'
import { type Subscription } from 'rxjs'

import { AuthFacade } from '../../auth-store/auth.facade'
import { transformRegistrationSubmitForm } from '../../utils/transform-registration-submit-form'
import { toggleEnableStatusFields } from 'src/app/auth/dictionary/toggle-enable-status-fields.dictionary'
import { subscribeToValueChangesOnForms } from 'src/app/auth/utils/subscribe-to-value-changes-on-forms.utils'
import { Country } from 'src/app/shared/enum/country.enum'
import { FormFields } from 'src/app/shared/enum/form-value.enum'
import { birthValidator } from 'src/app/shared/validators/birth.validator'
import { emailValidator } from 'src/app/shared/validators/email.validator'
import { hasNoSpaces } from 'src/app/shared/validators/has-no-spaces.validation'
import { hasOneCharacter } from 'src/app/shared/validators/has-one-character.validator'
import { hasOneLowerCaseCharacter } from 'src/app/shared/validators/has-one-lowercase-character.validator'
import { hasOneNumber } from 'src/app/shared/validators/has-one-number.validator'
import { hasOneUpperCaseCharacter } from 'src/app/shared/validators/has-one-uppercase-character.validator'
import { minCharacterValidator } from 'src/app/shared/validators/min-character.validator'
import { nameValidator } from 'src/app/shared/validators/name.validator'
import { postalCodeValidator } from 'src/app/shared/validators/postal-code.validator'

@Component({
  selector: 'ec-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit, OnDestroy {
  public isDisableBillingAddress = true
  public countryArray = [Country.Usa, Country.Canada]
  public arraySubscriptions: Subscription[] = []

  public singUpForm = this.fb.group({
    email: new FormControl<string | null>('', [emailValidator, hasOneCharacter]),
    firstName: new FormControl<string | null>('', [hasOneCharacter, nameValidator]),
    lastName: new FormControl<string | null>('', [hasOneCharacter, nameValidator]),
    password: new FormControl<string | null>('', [
      minCharacterValidator,
      hasOneLowerCaseCharacter,
      hasOneUpperCaseCharacter,
      hasOneNumber,
      hasNoSpaces,
    ]),
    dateOfBirth: new FormControl<TuiDay>(new TuiDay(2010, 0, 1), [birthValidator]),
    street: new FormControl<string | null>('', [hasOneCharacter]),
    city: new FormControl<string | null>('', [hasOneCharacter, nameValidator]),
    postalCode: new FormControl<string | null>('', [postalCodeValidator]),
    country: new FormControl(this.countryArray[0]),
    billingStreet: new FormControl<string | null>('', [hasOneCharacter]),
    billingCity: new FormControl<string | null>('', [hasOneCharacter, nameValidator]),
    billingPostalCode: new FormControl<string | null>('', [
      value => postalCodeValidator(value, FormFields.BillingCountry),
    ]),
    billingCountry: new FormControl(this.countryArray[0]),
    copyAddressCheckbox: new FormControl(false),
    defaultShippingAddress: new FormControl(true),
    defaultBillingAddress: new FormControl(false),
  })

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
  ) {}

  public ngOnInit(): void {
    this.arraySubscriptions = subscribeToValueChangesOnForms([
      this.singUpForm.controls.email,
      this.singUpForm.controls.firstName,
      this.singUpForm.controls.lastName,
      this.singUpForm.controls.password,
      this.singUpForm.controls.street,
      this.singUpForm.controls.city,
      this.singUpForm.controls.postalCode,
    ])
    this.toggleStatusBillingAddressField()
  }

  public countryTrackByFn = (item: number): string => {
    return this.countryArray[item]
  }

  public updateShippingPostalCodeValidation = (): void => {
    this.singUpForm.controls.postalCode.updateValueAndValidity()
  }

  public updateBillingPostalCodeValidation = (): void => {
    this.singUpForm.controls.billingPostalCode.updateValueAndValidity()
  }

  private copyAddressFields(): void {
    const arrayAddressControls = [
      this.singUpForm.controls.street,
      this.singUpForm.controls.city,
      this.singUpForm.controls.postalCode,
      this.singUpForm.controls.country,
    ]

    const arrayBillingAddressControls = [
      this.singUpForm.controls.billingStreet,
      this.singUpForm.controls.billingCity,
      this.singUpForm.controls.billingPostalCode,
      this.singUpForm.controls.billingCountry,
    ]

    arrayBillingAddressControls.forEach((formControl, index) => {
      formControl.setValue(arrayAddressControls[index].getRawValue())
    })
  }

  private clearBillingAddress(): void {
    const arrayBillingAddressControls = [
      this.singUpForm.controls.billingStreet,
      this.singUpForm.controls.billingCity,
      this.singUpForm.controls.billingPostalCode,
    ]

    arrayBillingAddressControls.forEach(formControl => {
      formControl.reset('')
    })
  }

  public toggleShippingAddressToBillingAddress = (): void => {
    this.singUpForm.controls.copyAddressCheckbox.getRawValue() ? this.copyAddressFields() : this.clearBillingAddress()
  }

  public onSubmit(): void {
    this.authFacade.signUp(transformRegistrationSubmitForm(this.singUpForm, this.isDisableBillingAddress))
  }

  public toggleStatusBillingAddressField = (): void => {
    this.isDisableBillingAddress = !this.isDisableBillingAddress

    toggleEnableStatusFields[String(this.isDisableBillingAddress)]([
      this.singUpForm.controls.billingStreet,
      this.singUpForm.controls.billingCity,
      this.singUpForm.controls.billingPostalCode,
      this.singUpForm.controls.billingCountry,
      this.singUpForm.controls.defaultBillingAddress,
    ])
  }

  public ngOnDestroy(): void {
    this.arraySubscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })

    this.arraySubscriptions = []
  }
}
