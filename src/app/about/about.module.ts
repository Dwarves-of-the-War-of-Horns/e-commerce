import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AboutPageComponent } from './about-page.component'
import { AboutRoutingModule } from './about-routing.module'

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
