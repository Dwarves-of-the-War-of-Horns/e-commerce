import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CatalogRoutingModule } from './catalog-routing.module'
import { CatalogStoreModule } from './catalog-store/catalog-store.module'
import { CatalogFacade } from './catalog-store/services/catalog.facade'
import { CategoriesListComponent } from './components/categories-list/categories-list.component'
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { CatalogHttpService } from './services/catalog-http.service'

@NgModule({
  declarations: [CatalogPageComponent, ProductDetailsComponent, CategoriesListComponent],
  imports: [CommonModule, CatalogRoutingModule, CatalogStoreModule],
  providers: [CatalogFacade, CatalogHttpService],
})
export class CatalogModule {}
