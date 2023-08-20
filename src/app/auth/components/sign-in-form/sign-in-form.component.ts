import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { type Subscription } from 'rxjs'

import { emailValidator } from '../../../shared/validators/email.validator'
import { hasOneCharacter } from '../../../shared/validators/has-one-character.validator'
import { hasOneLowerCaseCharacter } from '../../../shared/validators/has-one-lowercase-character.validator'
import { hasOneUpperCaseCharacter } from '../../../shared/validators/has-one-uppercase-character.validator'
import { minCharacterValidator } from '../../../shared/validators/min-character.validator'
import { AuthFacade } from '../../auth-store/auth.facade'
import type { SignInSubmitForm } from '../../model/sign-in-submit-form.model'
import { hasNoSpaces } from 'src/app/shared/validators/has-no-spaces.validation'
import { hasOneNumber } from 'src/app/shared/validators/has-one-number.validator'

@Component({
  selector: 'ec-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit, OnDestroy {
  public errorMessage$ = this.authFacade.errorMessage$
  public arraySubscriptions: Subscription[] = []

  public signInForm = this.fb.group({
    username: new FormControl<string | null>('', [hasNoSpaces, hasOneCharacter, emailValidator]),
    password: new FormControl<string | null>('', [
      hasNoSpaces,
      hasOneNumber,
      hasOneUpperCaseCharacter,
      hasOneLowerCaseCharacter,
      minCharacterValidator,
    ]),
  })
  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
  ) {}

  ngOnInit(): void {
    this.arraySubscriptions = [this.signInForm.controls.username, this.signInForm.controls.password].map(
      fromControl => {
        return fromControl.valueChanges.subscribe(() => {
          fromControl.markAsTouched()
        })
      },
    )
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
