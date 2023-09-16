import { ClipboardModule } from '@angular/cdk/clipboard'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TuiDropdownModule, TuiLinkModule } from '@taiga-ui/core'
import { TuiIslandModule, TuiMarkerIconModule, TuiTagModule } from '@taiga-ui/kit'

import { HomePageComponent } from './home-page.component'
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TuiIslandModule,
    TuiLinkModule,
    TuiMarkerIconModule,
    TuiTagModule,
    ClipboardModule,
    TuiDropdownModule,
  ],
})
export class HomeModule {}
