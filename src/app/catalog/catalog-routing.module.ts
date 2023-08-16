import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { catalogRoutes } from './catalog.routes'

@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
