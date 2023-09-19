import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core'
import { TuiIslandModule } from '@taiga-ui/kit'

import { ProductCardComponent } from './product-card.component'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

const mockProduct: SimpleProduct = {
  key: '1',
  name: 'Product 1',
  slug: 'slug',
  metaTitle: 'string',
  metaDescription: 'string',
  id: 'id',
  variantId: 1,
  images: ['url1'],
  prices: {
    default: 100,
    discounted: 50,
  },
  description: 'Product 1 description',
  attributes: [{ name: 'test name', value: [{ key: 'testKey', label: 'test-label' }] }],
}

describe('ProductCardComponent', () => {
  let component: ProductCardComponent
  let fixture: ComponentFixture<ProductCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [TuiIslandModule, TuiLinkModule, TuiMoneyModule, TuiButtonModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductCardComponent)
    component = fixture.componentInstance
    component.product = mockProduct
    component.isInCart = true
    component.addToCartHandler = jest.fn()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
