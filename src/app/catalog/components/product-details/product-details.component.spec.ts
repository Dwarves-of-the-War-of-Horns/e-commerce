import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiDestroyService } from '@taiga-ui/cdk'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { ProductDetailsComponent } from './product-details.component'
import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent
  let fixture: ComponentFixture<ProductDetailsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [CatalogFacade, CartFacade, provideMockStore({}), TuiDestroyService],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
