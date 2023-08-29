import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { CatalogEffects } from './catalog-store.effects'
import { catalogReducer } from './catalog-store.reducer'
import { CatalogFacade } from './services/catalog.facade'
import { StoreFeatureNames } from 'src/app/shared/enum/store-feature-names.enum'

@NgModule({
  imports: [
    StoreModule.forFeature(StoreFeatureNames.Catalog, catalogReducer),
    EffectsModule.forFeature(CatalogEffects),
  ],
  providers: [CatalogFacade],
})
export class CatalogStoreModule {}
