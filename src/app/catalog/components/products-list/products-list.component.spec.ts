import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiLoaderModule } from '@taiga-ui/core'

import { ProductCardComponent } from '../product-card/product-card.component'
import { ProductsListComponent } from './products-list.component'
import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'

describe('ProductsListComponent', () => {
  let component: ProductsListComponent
  let fixture: ComponentFixture<ProductsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ProductCardComponent],
      imports: [TuiLoaderModule, TuiLetModule],
      providers: [CartFacade, provideMockStore({})],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
