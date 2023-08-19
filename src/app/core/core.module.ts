import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { AuthEffects } from '../auth/auth-store/auth.effects'
import { authReducer } from '../auth/auth-store/auth.reducer'
import { StorageModule } from './storage/storage.module'
import { storageKeyPrefix } from './storage/tokens/storage-key.token'

@NgModule({
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', authReducer),
    StorageModule.forRoot({ config: { prefix: storageKeyPrefix.toString() } }),
  ],
})
export class CoreModule {}
