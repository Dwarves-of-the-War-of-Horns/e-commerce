import { NgModule } from '@angular/core'

import { StorageModule } from './storage/storage.module'
import { storageKeyPrefix } from './storage/tokens/storage-key.token'

@NgModule({
  imports: [StorageModule.forRoot({ config: { prefix: storageKeyPrefix.toString() } })],
})
export class CoreModule {}
