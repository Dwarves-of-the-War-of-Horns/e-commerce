import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce'
import { TuiLinkModule } from '@taiga-ui/core'
import { TuiIslandModule } from '@taiga-ui/kit'

import { ProductCardComponent } from './product-card.component'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

const mockProduct: SimpleProduct = {
  key: '1',
  name: 'Product 1',
  slug: 'slug',
  metaTitle: 'string',
  metaDescription: 'string',
  images: ['url1'],
  prices: {
    default: 100,
    discounted: 50,
  },
  description: 'Product 1 description',
}

describe('ProductCardComponent', () => {
  let component: ProductCardComponent
  let fixture: ComponentFixture<ProductCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [TuiIslandModule, TuiLinkModule, TuiCurrencyPipeModule, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductCardComponent)
    component = fixture.componentInstance
    component.product = mockProduct
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
