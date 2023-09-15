import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TuiMoneyModule } from '@taiga-ui/addon-commerce'
import { TuiLetModule } from '@taiga-ui/cdk'
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {
  TuiInputInlineModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiIslandModule,
  TuiTagModule,
} from '@taiga-ui/kit'
import { TuiBlockStatusModule } from '@taiga-ui/layout'

import { CartPageComponent } from './cart-page.component'
import { CartRoutingModule } from './cart-routing.module'
import { CartItemsComponent } from './components/cart-items/cart-items.component'
import { CartTotalComponent } from './components/cart-total/cart-total.component'
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component'

@NgModule({
  declarations: [CartPageComponent, CartTotalComponent, CartItemsComponent, EmptyCartComponent],
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
    TuiLoaderModule,
    TuiBlockStatusModule,
    TuiTagModule,
    TuiSvgModule,
    TuiDropdownModule,
  ],
})
export class CartModule {}
