import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TuiLinkModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiBreadcrumbsModule, TuiIslandModule, TuiTreeModule } from '@taiga-ui/kit'

import { CatalogRoutingModule } from './catalog-routing.module'
import { CatalogStoreModule } from './catalog-store/catalog-store.module'
import { CatalogFacade } from './catalog-store/services/catalog.facade'
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component'
import { CategoriesListComponent } from './components/categories-list/categories-list.component'
import { TreeComponent } from './components/tree/tree.component'
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { CatalogHttpService } from './services/catalog-http.service'
import { CatalogUrlTreeService } from './services/catalog-url.service'

@NgModule({
  declarations: [
    CatalogPageComponent,
    ProductDetailsComponent,
    CategoriesListComponent,
    TreeComponent,
    BreadcrumpsComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CatalogStoreModule,
    TuiTreeModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiIslandModule,
    TuiBreadcrumbsModule,
  ],
  providers: [CatalogFacade, CatalogHttpService, CatalogUrlTreeService],
})
export class CatalogModule {}
