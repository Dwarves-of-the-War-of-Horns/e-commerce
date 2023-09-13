import { CommonModule, NgOptimizedImage } from '@angular/common'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core'
import { TuiInputInlineModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule } from '@taiga-ui/kit'
import { TuiBlockStatusModule } from '@taiga-ui/layout'

import { CartPageComponent } from './cart-page.component'
import { CartRoutingModule } from './cart-routing.module'
import { CartFacade } from './cart-store/services/cart.facade'
import { CartItemsComponent } from './components/cart-items/cart-items.component'
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component'
import { OrderInputsComponent } from './components/order-inputs/order-inputs.component'

describe('CartPageComponent', () => {
  let component: CartPageComponent
  let fixture: ComponentFixture<CartPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPageComponent, OrderInputsComponent, CartItemsComponent, EmptyCartComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        CartRoutingModule,
        CommonModule,
        TuiIslandModule,
        TuiButtonModule,
        TuiInputInlineModule,
        TuiMoneyModule,
        NgOptimizedImage,
        TuiInputNumberModule,
        TuiLetModule,
        TuiLoaderModule,
        TuiBlockStatusModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore({}), CartFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(CartPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
