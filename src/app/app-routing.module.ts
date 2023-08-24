import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { appRoutes } from './app.routes'
import { AuthGuard } from './auth/guards/auth.guard'

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
