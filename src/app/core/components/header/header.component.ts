import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiSvgModule } from '@taiga-ui/core'

import { AuthFacade } from 'src/app/auth/auth-store/auth.facade'

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
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private authFacade = inject(AuthFacade)
  public isLoggedIn$ = this.authFacade.isLoggedIn$
  public isAuthDropdownOpen = false

  public logout(): void {
    this.authFacade.logout()
  }

  public selectAuthOption(): void {
    this.isAuthDropdownOpen = false
  }
}
