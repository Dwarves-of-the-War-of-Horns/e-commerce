import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TuiLinkModule } from '@taiga-ui/core'
import { TuiActionModule, TuiIslandModule } from '@taiga-ui/kit'

import { AboutPageComponent } from './about-page.component'
import { AboutRoutingModule } from './about-routing.module'
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component'
import { CourseLogoComponent } from './components/course-logo/course-logo.component'
import { ExtractGithubNickPipe } from './pipes/extract-github-nick.pipe'

@NgModule({
  declarations: [AboutPageComponent, ExtractGithubNickPipe, CollaboratorsListComponent, CourseLogoComponent],
  imports: [CommonModule, AboutRoutingModule, TuiIslandModule, TuiActionModule, TuiLinkModule],
})
export class AboutModule {}
