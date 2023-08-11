import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TuiButtonModule, TuiDataListModule, TuiErrorModule } from '@taiga-ui/core'
import {
  TuiCheckboxBlockModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
  TuiFilterByInputPipeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiSelectModule,
} from '@taiga-ui/kit'

import { AuthRoutingModule } from './auth-routing.module'
import { SingUpFormComponent } from './components/sign-up-form/sign-up-form.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SignInComponent, SignUpComponent, SingUpFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiButtonModule,
    TuiSelectModule,
    TuiInputPasswordModule,
    TuiDataListModule,
    TuiCheckboxBlockModule,
    TuiComboBoxModule,
    TuiFilterByInputPipeModule,
    TuiDataListWrapperModule,
    TuiInputDateModule,
  ],
})
export class AuthModule {}
