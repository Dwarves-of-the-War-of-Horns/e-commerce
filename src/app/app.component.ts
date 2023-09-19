import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core'

import { AuthFacade } from './auth/auth-store/service/auth.facade'
import { CartFacade } from './cart/cart-store/services/cart.facade'

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private authFacade = inject(AuthFacade)
  private cartFacade = inject(CartFacade)

  public ngOnInit(): void {
    this.authFacade.initAuth()
    this.cartFacade.initCart()
  }
}
