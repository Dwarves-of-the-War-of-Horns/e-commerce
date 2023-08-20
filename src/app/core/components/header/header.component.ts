import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiTabsModule } from '@taiga-ui/kit'

import { AuthFacade } from 'src/app/auth/auth-store/auth.facade'

@Component({
  selector: 'ec-header',
  standalone: true,
  imports: [RouterLink, TuiButtonModule, TuiSvgModule, CommonModule, TuiTabsModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private authFacade = inject(AuthFacade)
  public isUserLogined$ = this.authFacade.isUserLogined$

  public logout(): void {
    this.authFacade.logOut()
  }
}
