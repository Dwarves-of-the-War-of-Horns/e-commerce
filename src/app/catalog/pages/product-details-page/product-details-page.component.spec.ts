import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiIslandModule } from '@taiga-ui/kit'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { ProductDetailsComponent } from '../../components/product-details/product-details.component'
import { ProductDetailsPageComponent } from './product-details-page.component'

describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent
  let fixture: ComponentFixture<ProductDetailsPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsPageComponent, ProductDetailsComponent],
      imports: [RouterTestingModule, TuiIslandModule],
      providers: [CatalogFacade, provideMockStore({})],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductDetailsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
