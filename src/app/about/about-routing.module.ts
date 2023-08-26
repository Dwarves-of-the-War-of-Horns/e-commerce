import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { aboutRoutes } from './about.routes'

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
