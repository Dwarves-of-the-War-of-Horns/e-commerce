import { Component, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'

import { emailValidator } from '../../../shared/validators/email.validator'
import { hasOneCharacter } from '../../../shared/validators/has-one-character.validator'
import { hasOneLowerCaseCharacter } from '../../../shared/validators/has-one-lowercase-character.validator'
import { hasOneUpperCaseCharacter } from '../../../shared/validators/has-one-uppercase-character.validator'
import { minCharacterValidator } from '../../../shared/validators/min-character.validator'
import { hasNoSpaces } from 'src/app/shared/validators/has-no-spaces.validation'
import { hasOneNumber } from 'src/app/shared/validators/has-one-number.validator'

@Component({
  selector: 'ec-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  public signInForm = this.fb.group({
    email: new FormControl<string | null>('', [hasNoSpaces, hasOneCharacter, emailValidator]),
    password: new FormControl<string | null>('', [
      hasNoSpaces,
      hasOneNumber,
      hasOneUpperCaseCharacter,
      hasOneLowerCaseCharacter,
      minCharacterValidator,
    ]),
  })
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.markAsTouched()
  }

  public onSubmit(): void {
    this.signInForm.getRawValue()
  }

  public markAsTouched(): void {
    const arrayForms = [this.signInForm.controls.email, this.signInForm.controls.password]

    arrayForms.forEach(fromControl => {
      fromControl.valueChanges.subscribe(() => {
        fromControl.markAsTouched()
      })
    })
  }
}
