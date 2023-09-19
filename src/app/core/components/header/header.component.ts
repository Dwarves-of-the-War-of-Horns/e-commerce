import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiBadgedContentModule } from '@taiga-ui/kit'

import { AuthFacade } from 'src/app/auth/auth-store/service/auth.facade'
import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'

@Component({
  selector: 'ec-header',
  standalone: true,
  imports: [
    RouterLink,
    TuiButtonModule,
    TuiSvgModule,
    CommonModule,
    NgOptimizedImage,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiBadgedContentModule,
    TuiLetModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private authFacade = inject(AuthFacade)
  private cartFacade = inject(CartFacade)
  public isLoggedIn$ = this.authFacade.isLoggedIn$
  public isAuthDropdownOpen = false
  public productsInCart$ = this.cartFacade.productsCount$

  public logout(): void {
    this.authFacade.logout()
  }

  public selectAuthOption(): void {
    this.isAuthDropdownOpen = false
  }
}
