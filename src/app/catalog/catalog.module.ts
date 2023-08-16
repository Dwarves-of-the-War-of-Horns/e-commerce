import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CatalogPageComponent } from './catalog-page.component'
import { CatalogRoutingModule } from './catalog-routing.module'
import { ProductDetailsComponent } from './product-details/product-details.component'

@NgModule({
  declarations: [CatalogPageComponent, ProductDetailsComponent],
  imports: [CommonModule, CatalogRoutingModule],
})
export class CatalogModule {}
