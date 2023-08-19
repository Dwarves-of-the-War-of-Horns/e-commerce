import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiTabsModule } from '@taiga-ui/kit'
import { of, shareReplay } from 'rxjs'

@Component({
  selector: 'ec-header',
  standalone: true,
  imports: [RouterLink, TuiButtonModule, TuiSvgModule, CommonModule, TuiTabsModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isUser$ = of(true).pipe(shareReplay(1))
}
