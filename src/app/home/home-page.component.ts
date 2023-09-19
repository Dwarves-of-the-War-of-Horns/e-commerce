import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { map } from 'rxjs'

import { CartFacade } from '../cart/cart-store/services/cart.facade'

@Component({
  selector: 'ec-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  public discounts$ = this.cartFacade.discounts$.pipe(map(discounts => Object.values(discounts)))

  constructor(private cartFacade: CartFacade) {}

  public ngOnInit(): void {
    this.cartFacade.getAllDiscountCodes()
  }
}
