import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TUI_BUTTON_OPTIONS, TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { of, shareReplay } from 'rxjs'

@Component({
  selector: 'ec-header',
  standalone: true,
  imports: [RouterLink, TuiButtonModule, TuiSvgModule, CommonModule],
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
}
