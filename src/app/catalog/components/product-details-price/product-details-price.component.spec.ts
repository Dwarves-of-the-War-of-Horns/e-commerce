import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'

import { ProductDetailsPriceComponent } from './product-details-price.component'

describe('ProductDetailsPriceComponent', () => {
  let component: ProductDetailsPriceComponent
  let fixture: ComponentFixture<ProductDetailsPriceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsPriceComponent],
      imports: [TuiMoneyModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductDetailsPriceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
