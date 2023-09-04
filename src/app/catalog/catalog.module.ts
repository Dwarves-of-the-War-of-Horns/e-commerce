import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TuiCurrencyPipeModule, TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiSidebarModule } from '@taiga-ui/addon-mobile'
import { TuiActiveZoneModule, TuiLetModule } from '@taiga-ui/cdk'
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {
  TuiBreadcrumbsModule,
  TuiCarouselModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiIslandModule,
  TuiPaginationModule,
  TuiSelectModule,
  TuiTreeModule,
} from '@taiga-ui/kit'

import { CatalogRoutingModule } from './catalog-routing.module'
import { CatalogStoreModule } from './catalog-store/catalog-store.module'
import { CatalogFacade } from './catalog-store/services/catalog.facade'
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component'
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component'
import { CategoriesListComponent } from './components/categories-list/categories-list.component'
import { ProductAttributesComponent } from './components/product-attributes/product-attributes.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductDetailsCarouselComponent } from './components/product-details-carousel/product-details-carousel.component'
import { ProductDetailsPriceComponent } from './components/product-details-price/product-details-price.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { ProductsListComponent } from './components/products-list/products-list.component'
import { TreeComponent } from './components/tree/tree.component'
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component'
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component'
import { CatalogHttpService } from './services/catalog-http.service'
import { CatalogUrlTreeService } from './services/catalog-url.service'

@NgModule({
  declarations: [
    CatalogPageComponent,
    CategoriesListComponent,
    TreeComponent,
    BreadcrumpsComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsPageComponent,
    ProductDetailsComponent,
    ProductAttributesComponent,
    ProductDetailsCarouselComponent,
    ProductDetailsPriceComponent,
    CatalogFormComponent,
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
    TuiSidebarModule,
    TuiButtonModule,
    TuiActiveZoneModule,
    TuiCarouselModule,
    TuiPaginationModule,
    TuiMoneyModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
  ],
  providers: [CatalogFacade, CatalogHttpService, CatalogUrlTreeService],
})
export class CatalogModule {}
