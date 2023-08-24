import { Component, inject, type OnInit } from '@angular/core'

import { AuthFacade } from './auth/auth-store/auth.facade'

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private authFacade = inject(AuthFacade)

  ngOnInit(): void {
    this.authFacade.init()
  }
}
