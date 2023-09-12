import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule } from '@taiga-ui/core'
import { TuiInputInlineModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule } from '@taiga-ui/kit'

import { CartPageComponent } from './cart-page.component'
import { CartRoutingModule } from './cart-routing.module'
import { OrderInputsComponent } from './components/order-inputs/order-inputs.component'
import { OrderItemsComponent } from './components/order-items/order-items.component'

@NgModule({
  declarations: [CartPageComponent, OrderInputsComponent, OrderItemsComponent],
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
})
export class CartModule {}
