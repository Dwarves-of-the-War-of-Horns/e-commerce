import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TuiLinkModule } from '@taiga-ui/core'
import { TuiIslandModule, TuiMarkerIconModule } from '@taiga-ui/kit'

import { HomePageComponent } from './home-page.component'
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, TuiIslandModule, TuiLinkModule, TuiMarkerIconModule],
})
export class HomeModule {}
