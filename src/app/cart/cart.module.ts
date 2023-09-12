import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core'
import { TuiInputInlineModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule } from '@taiga-ui/kit'

import { CartPageComponent } from './cart-page.component'
import { CartRoutingModule } from './cart-routing.module'
import { CartItemsComponent } from './components/cart-items/cart-items.component'
import { OrderInputsComponent } from './components/order-inputs/order-inputs.component'

@NgModule({
  declarations: [CartPageComponent, OrderInputsComponent, CartItemsComponent],
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
    TuiLinkModule,
    TuiTextfieldControllerModule,
  ],
})
export class CartModule {}
