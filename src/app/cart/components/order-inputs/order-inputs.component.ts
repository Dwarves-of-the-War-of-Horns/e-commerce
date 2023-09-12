import { Component } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'

import { CartFacade } from '../../cart-store/services/cart.facade'

@Component({
  selector: 'ec-order-inputs',
  templateUrl: './order-inputs.component.html',
  styleUrls: ['./order-inputs.component.scss'],
})
export class OrderInputsComponent {
  public isEditing = false
  public totalPrice$ = this.cartFacade.totalPrice$

  public discountForm = this.fb.group({
    discountValue: new FormControl(''),
  })
  constructor(
    private fb: FormBuilder,
    private cartFacade: CartFacade,
  ) {}
}
