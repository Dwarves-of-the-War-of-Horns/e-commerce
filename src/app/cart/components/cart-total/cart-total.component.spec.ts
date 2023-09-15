import { CommonModule, NgOptimizedImage } from '@angular/common'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule } from '@taiga-ui/core'
import { TuiInputInlineModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule } from '@taiga-ui/kit'

import { CartRoutingModule } from '../../cart-routing.module'
import { CartFacade } from '../../cart-store/services/cart.facade'
import { CartTotalComponent } from './cart-total.component'

describe('OrderInputsComponent', () => {
  let component: CartTotalComponent
  let fixture: ComponentFixture<CartTotalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartTotalComponent],
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
      ],
      providers: [provideMockStore({}), CartFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(CartTotalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
