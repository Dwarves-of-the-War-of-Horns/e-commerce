import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CartPageComponent } from './cart-page.component'
import { CartRoutingModule } from './cart-routing.module'

@NgModule({
  declarations: [CartPageComponent],
  imports: [CartRoutingModule, CommonModule],
})
export class CartModule {}
