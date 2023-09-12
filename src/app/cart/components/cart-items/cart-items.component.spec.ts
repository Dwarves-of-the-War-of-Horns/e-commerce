import { CommonModule, NgOptimizedImage } from '@angular/common'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiBreakpointService, TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core'
import { TuiInputInlineModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule } from '@taiga-ui/kit'

import { CartRoutingModule } from '../../cart-routing.module'
import { CartFacade } from '../../cart-store/services/cart.facade'
import { CartItemsComponent } from './cart-items.component'

describe('CartItemsComponent', () => {
  let component: CartItemsComponent
  let fixture: ComponentFixture<CartItemsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemsComponent],
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
        TuiTextfieldControllerModule,
      ],
      providers: [provideMockStore({}), CartFacade, TuiBreakpointService],
    }).compileComponents()

    fixture = TestBed.createComponent(CartItemsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
