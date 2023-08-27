import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CatalogRoutingModule } from './catalog-routing.module'
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'

@NgModule({
  declarations: [CatalogPageComponent, ProductDetailsComponent],
  imports: [CommonModule, CatalogRoutingModule],
})
export class CatalogModule {}
