import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { type Subscription } from 'rxjs'

import { emailValidator } from '../../../shared/validators/email.validator'
import { hasOneCharacter } from '../../../shared/validators/has-one-character.validator'
import { hasOneLowerCaseCharacter } from '../../../shared/validators/has-one-lowercase-character.validator'
import { hasOneUpperCaseCharacter } from '../../../shared/validators/has-one-uppercase-character.validator'
import { minCharacterValidator } from '../../../shared/validators/min-character.validator'
import { AuthFacade } from '../../auth-store/auth.facade'
import type { SignInSubmitForm } from '../../models/sign-in-submit-form.model'
import { subscribeToValueChangesOnForms } from 'src/app/shared/utils/subscribe-to-value-changes-on-forms.util'
import { hasNoSpaces } from 'src/app/shared/validators/has-no-spaces.validator'
import { hasOneNumber } from 'src/app/shared/validators/has-one-number.validator'

@Component({
  selector: 'ec-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit, OnDestroy {
  public arraySubscriptions: Subscription[] = []

  public signInForm = this.fb.group({
    username: new FormControl<string>('', [emailValidator, hasOneCharacter]),
    password: new FormControl<string>('', [
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

  ngOnInit(): void {
    this.arraySubscriptions = subscribeToValueChangesOnForms([
      this.signInForm.controls.username,
      this.signInForm.controls.password,
    ])
  }

  public onSubmit(): void {
    this.authFacade.signIn(this.signInForm.getRawValue() as SignInSubmitForm)
  }

  public ngOnDestroy(): void {
    this.arraySubscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })

    this.arraySubscriptions = []
  }
}
