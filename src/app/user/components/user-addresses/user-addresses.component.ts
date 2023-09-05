import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import type { Address } from '@commercetools/platform-sdk'
import type { Subscription } from 'rxjs'

import { submitFormActionDictionary } from '../../constants/submit-form-actions.constant'
import type { AddressActionSubmitForm } from '../../types/address-action-submit-form.type'
import { transformAddressSubmitForm } from '../../utils/transform-address-submit-form.util'
import { AuthFacade } from 'src/app/auth/auth-store/auth.facade'
import { Country } from 'src/app/shared/enums/country.enum'
import { hasOneCharacter } from 'src/app/shared/validators/has-one-character.validator'
import { nameValidator } from 'src/app/shared/validators/name.validator'
import { postalCodeValidator } from 'src/app/shared/validators/postal-code.validator'

@Component({
  selector: 'ec-user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.scss'],
})
export class UserAddressesComponent implements OnInit, OnDestroy {
  public isShowEditingForm = false
  private actionAddressForm: AddressActionSubmitForm = submitFormActionDictionary.changeAddress
  private userAddressId: string | null | undefined = null
  public userAddresses: Address[] | null = null
  public defaultBillingAddressId: string | null = null
  public defaultShippingAddressId: string | null = null
  public userVersion: number | null = null
  public countryArray = [Country.Usa, Country.Canada]
  public subscription: Subscription | null = null

  public userAddressesForm = this.fb.group({
    streetName: new FormControl<string>('', [hasOneCharacter]),
    city: new FormControl<string>('', [hasOneCharacter, nameValidator]),
    postalCode: new FormControl<string>('', [postalCodeValidator]),
    country: new FormControl(this.countryArray[0]),
  })

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
  ) {}

  public ngOnInit(): void {
    this.subscription = this.authFacade.userData$.subscribe(userDate => {
      if (userDate?.addresses) {
        this.userAddresses = userDate.addresses
      }

      if (userDate?.defaultBillingAddressId) {
        this.defaultBillingAddressId = userDate.defaultBillingAddressId
      }

      if (userDate?.defaultShippingAddressId) {
        this.defaultShippingAddressId = userDate.defaultShippingAddressId
      }

      if (userDate?.version) {
        this.userVersion = userDate.version
      }
    })
  }

  public countryTrackByFn = (item: number): string => {
    return this.countryArray[item]
  }

  public addressesTrackByFn = (_: number, value: Address): Address => {
    return value
  }

  public updatePostalCodeValidation = (): void => {
    this.userAddressesForm.controls.postalCode.updateValueAndValidity()
  }

  private resetForm = (): void => {
    this.userAddressesForm.controls.city.reset('')
    this.userAddressesForm.controls.postalCode.reset('')
    this.userAddressesForm.controls.streetName.reset('')
    this.userAddressesForm.controls.country.setValue(this.countryArray[0])
  }

  public showAddressForm = (action: AddressActionSubmitForm, index?: number): void => {
    this.isShowEditingForm = !this.isShowEditingForm
    this.actionAddressForm = action

    if (this.userAddresses && index !== undefined) {
      this.userAddressId = this.userAddresses[index].id

      this.userAddressesForm.controls.city.setValue(this.userAddresses[index].city || '')
      this.userAddressesForm.controls.postalCode.setValue(this.userAddresses[index].postalCode || '')
      this.userAddressesForm.controls.streetName.setValue(this.userAddresses[index].streetName || '')
      this.userAddressesForm.controls.country.setValue(
        this.userAddresses[index].country === 'US' ? this.countryArray[0] : this.countryArray[1],
      )

      return
    }

    this.resetForm()
  }

  public setDefaultShippingAddress(addressId?: string): void {
    if (this.userVersion === null) {
      return
    }

    this.authFacade.updateCustomer({
      version: this.userVersion,
      actions: [{ action: submitFormActionDictionary.shippingAddress, addressId }],
    })
  }

  public setDefaultBillingAddress(addressId?: string): void {
    if (this.userVersion === null) {
      return
    }

    this.authFacade.updateCustomer({
      version: this.userVersion,
      actions: [{ action: submitFormActionDictionary.billingAddress, addressId }],
    })
  }
  public onSubmitRemoveAddress(addressId?: string): void {
    if (!(this.userAddresses && this.userVersion !== null)) {
      return
    }

    this.authFacade.updateCustomer({
      version: this.userVersion,
      actions: [{ action: submitFormActionDictionary.removeAddress, addressId }],
    })
  }

  public onSubmit(): void {
    if (!(this.userAddresses && this.userVersion !== null)) {
      return
    }

    this.authFacade.updateCustomer(
      transformAddressSubmitForm[this.actionAddressForm]({
        form: this.userAddressesForm,
        version: this.userVersion,
        action: this.actionAddressForm,
        addressId: this.userAddressId,
      }),
    )

    this.isShowEditingForm = false
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
