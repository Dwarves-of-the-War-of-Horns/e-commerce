import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { AuthEffects } from '../auth/auth-store/auth.effects'
import { AuthFacade } from '../auth/auth-store/auth.facade'
import { authReducer } from '../auth/auth-store/auth.reducer'
import { StoreFeatureNames } from '../shared/enum/store-feature-names.enum'
import { StorageModule } from './storage/storage.module'
import { storageKeyPrefix } from './storage/tokens/storage-key.token'

@NgModule({
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(StoreFeatureNames.Auth, authReducer),
    StorageModule.forRoot({ config: { prefix: storageKeyPrefix.toString() } }),
  ],
  providers: [{ provide: AuthFacade, useClass: AuthFacade }],
})
export class CoreModule {}
