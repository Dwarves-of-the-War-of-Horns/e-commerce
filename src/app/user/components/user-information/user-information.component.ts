import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import type { Customer } from '@commercetools/platform-sdk'
import { TuiDay } from '@taiga-ui/cdk'
import type { Subscription } from 'rxjs'

import { changeInformationSubmitForm } from '../../helpers/change-information-submit-form.util'
import type { NewPassword } from '../../models/new-password.model'
import { AuthFacade } from 'src/app/auth/auth-store/auth.facade'
import { subscribeToValueChangesOnForms } from 'src/app/shared/utils/subscribe-to-value-changes-on-forms.util'
import { birthValidator } from 'src/app/shared/validators/birth.validator'
import { emailValidator } from 'src/app/shared/validators/email.validator'
import { hasNoSpaces } from 'src/app/shared/validators/has-no-spaces.validator'
import { hasOneCharacter } from 'src/app/shared/validators/has-one-character.validator'
import { hasOneLowerCaseCharacter } from 'src/app/shared/validators/has-one-lowercase-character.validator'
import { hasOneNumber } from 'src/app/shared/validators/has-one-number.validator'
import { hasOneUpperCaseCharacter } from 'src/app/shared/validators/has-one-uppercase-character.validator'
import { minCharacterValidator } from 'src/app/shared/validators/min-character.validator'
import { nameValidator } from 'src/app/shared/validators/name.validator'

@Component({
  selector: 'ec-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit, OnDestroy {
  public isShowEditingForm = false
  public isShowPasswordForm = false
  public userData: Customer | null = null
  public arraySubscriptions: Subscription[] = []
  public userData$ = this.authFacade.userData$
  public userInfoForm = this.fb.group({
    firstName: new FormControl<string>('', [nameValidator, hasOneCharacter]),
    lastName: new FormControl<string>('', [nameValidator, hasOneCharacter]),
    dateOfBirth: new FormControl<TuiDay>(new TuiDay(2001, 0, 1), [birthValidator]),
    email: new FormControl<string>('', [emailValidator, hasOneCharacter]),
  })

  public userPasswordForm = this.fb.group({
    currentPassword: new FormControl<string | null>('', [
      minCharacterValidator,
      hasOneLowerCaseCharacter,
      hasOneUpperCaseCharacter,
      hasOneNumber,
      hasNoSpaces,
    ]),
    newPassword: new FormControl<string | null>('', [
      minCharacterValidator,
      hasOneLowerCaseCharacter,
      hasOneUpperCaseCharacter,
      hasOneNumber,
      hasNoSpaces,
    ]),
  })

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
  ) {}

  public ngOnInit(): void {
    const subscription = this.authFacade.userData$.subscribe(userDate => {
      this.userData = userDate
    })

    this.arraySubscriptions = this.arraySubscriptions.concat(
      subscription,
      ...subscribeToValueChangesOnForms([
        this.userInfoForm.controls.firstName,
        this.userInfoForm.controls.lastName,
        this.userInfoForm.controls.dateOfBirth,
        this.userInfoForm.controls.email,
        this.userPasswordForm.controls.currentPassword,
        this.userPasswordForm.controls.newPassword,
      ]),
    )
  }

  public onSubmitNewPassword(): void {
    if (!this.userData) {
      return
    }

    const passwordForm = this.userPasswordForm.getRawValue() as NewPassword

    this.authFacade.changePassword({
      version: this.userData.version,
      currentPassword: passwordForm.currentPassword,
      newPassword: passwordForm.newPassword,
      username: this.userData.email,
    })

    this.isShowPasswordForm = false
  }

  public showPasswordForm = (): void => {
    this.isShowPasswordForm = true
    this.userPasswordForm.controls.currentPassword.reset('')
    this.userPasswordForm.controls.newPassword.reset('')
    this.userPasswordForm.markAsUntouched()
  }

  public hidePasswordForm = (): void => {
    this.isShowPasswordForm = false
  }

  public showEditionForm = (): void => {
    if (!this.userData) {
      return
    }

    this.isShowEditingForm = !this.isShowEditingForm
    const [year, mount, date] = (this.userData.dateOfBirth || '2010-01-01').split('-')

    this.userInfoForm.controls.firstName.setValue(this.userData.firstName || '')
    this.userInfoForm.controls.lastName.setValue(this.userData.lastName || '')
    this.userInfoForm.controls.email.setValue(this.userData.email || '')
    this.userInfoForm.controls.dateOfBirth.setValue(new TuiDay(Number(year), Number(mount) - 1, Number(date)))
    this.userInfoForm.controls.dateOfBirth.markAsUntouched()
  }

  public onSubmit(): void {
    if (!this.userData) {
      return
    }

    this.authFacade.updateCustomer(changeInformationSubmitForm(this.userInfoForm, this.userData))
    this.isShowEditingForm = false
  }

  public ngOnDestroy(): void {
    this.arraySubscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })

    this.arraySubscriptions = []
  }
}
