import { NgModule } from '@angular/core'

import { AuthRoutingModule } from './auth-routing.module'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [AuthRoutingModule],
})
export class AuthModule {}
