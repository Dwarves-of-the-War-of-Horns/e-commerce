import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiErrorModule,
  TuiHintModule,
  TuiRootModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {
  TuiCheckboxBlockModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
  TuiFilterByInputPipeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiSelectModule,
} from '@taiga-ui/kit'
import { TuiAccordionModule } from '@taiga-ui/kit/components/accordion'

import { AuthEffects } from '../auth/auth-store/auth.effects'
import { authReducer } from '../auth/auth-store/auth.reducer'
import { StorageModule } from '../core/storage/storage.module'
import { storageKeyPrefix } from '../core/storage/tokens/storage-key.token'
import { StoreFeatureNames } from '../shared/enums/store-feature-names.enum'
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component'
import { UserInformationComponent } from './components/user-information/user-information.component'
import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './user.component'

@NgModule({
  declarations: [UserComponent, UserInformationComponent, UserAddressesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(StoreFeatureNames.Auth, authReducer),
    StorageModule.forRoot({ config: { prefix: storageKeyPrefix.toString() } }),
    TuiErrorModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiCheckboxBlockModule,
    TuiComboBoxModule,
    TuiFilterByInputPipeModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    TuiAccordionModule,
    TuiFieldErrorPipeModule,
    TuiRootModule,
    TuiDialogModule,
    TuiHintModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiMarkerIconModule,
    TuiIslandModule,
  ],
})
export class UserModule {}
