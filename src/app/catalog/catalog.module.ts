import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiLinkModule, TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiBreadcrumbsModule, TuiIslandModule, TuiTreeModule } from '@taiga-ui/kit'

import { CatalogRoutingModule } from './catalog-routing.module'
import { CatalogStoreModule } from './catalog-store/catalog-store.module'
import { CatalogFacade } from './catalog-store/services/catalog.facade'
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component'
import { CategoriesListComponent } from './components/categories-list/categories-list.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductsListComponent } from './components/products-list/products-list.component'
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
    ProductsListComponent,
    ProductCardComponent,
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
    TuiCurrencyPipeModule,
    TuiLoaderModule,
    TuiLetModule,
  ],
  providers: [CatalogFacade, CatalogHttpService, CatalogUrlTreeService],
})
export class CatalogModule {}
