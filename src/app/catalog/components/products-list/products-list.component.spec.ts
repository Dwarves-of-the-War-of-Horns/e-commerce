import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiLoaderModule } from '@taiga-ui/core'
import { TuiPaginationModule } from '@taiga-ui/kit'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import { CatalogUrlTreeService } from '../../services/catalog-url.service'
import { PaginationComponent } from '../pagination/pagination.component'
import { ProductCardComponent } from '../product-card/product-card.component'
import { ProductsListComponent } from './products-list.component'
import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'

describe('ProductsListComponent', () => {
  let component: ProductsListComponent
  let fixture: ComponentFixture<ProductsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ProductCardComponent, PaginationComponent],
      imports: [TuiLoaderModule, TuiLetModule, TuiPaginationModule],
      providers: [CartFacade, provideMockStore({}), CatalogFacade, CatalogQueryParamsService, CatalogUrlTreeService],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
