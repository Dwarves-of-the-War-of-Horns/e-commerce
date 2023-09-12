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
import { OrderInputsComponent } from './order-inputs.component'

describe('OrderInputsComponent', () => {
  let component: OrderInputsComponent
  let fixture: ComponentFixture<OrderInputsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderInputsComponent],
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

    fixture = TestBed.createComponent(OrderInputsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
