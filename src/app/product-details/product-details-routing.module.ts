import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { productDetailsRoutes } from './product-details.routes'

@NgModule({
  imports: [RouterModule.forChild(productDetailsRoutes)],
  exports: [RouterModule],
})
export class ProductDetailsRoutingModule {}
