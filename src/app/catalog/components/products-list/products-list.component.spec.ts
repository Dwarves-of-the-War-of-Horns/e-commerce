import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiLoaderModule } from '@taiga-ui/core'

import { ProductCardComponent } from '../product-card/product-card.component'
import { ProductsListComponent } from './products-list.component'

describe('ProductsListComponent', () => {
  let component: ProductsListComponent
  let fixture: ComponentFixture<ProductsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ProductCardComponent],
      imports: [TuiLoaderModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
