import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'ec-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
