import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TUI_BUTTON_OPTIONS, TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiTabsModule } from '@taiga-ui/kit'
import { of, shareReplay } from 'rxjs'

import type { PageData } from '../../models/page-data'

@Component({
  selector: 'ec-header',
  standalone: true,
  imports: [RouterLink, TuiButtonModule, TuiSvgModule, CommonModule, TuiTabsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    {
      provide: TUI_BUTTON_OPTIONS,
      useValue: {
        appearance: 'outline',
        size: 's',
      },
    },
  ],
})
export class HeaderComponent {
  isUser$ = of(false).pipe(shareReplay(1))

  pagesData: PageData[] = [
    {
      title: 'Home',
      routerLink: ['/'],
    },

    {
      title: 'About us',
      routerLink: ['/', 'about'],
    },

    {
      title: 'Our goodies',
      routerLink: ['/', 'catalog'],
    },
  ]
}
