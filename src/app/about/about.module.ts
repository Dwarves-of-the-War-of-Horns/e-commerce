import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TuiIslandModule } from '@taiga-ui/kit'

import { AboutPageComponent } from './about-page.component'
import { AboutRoutingModule } from './about-routing.module'
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component'
import { ExtractGithubNickPipe } from './pipes/extract-github-nick.pipe'

@NgModule({
  declarations: [AboutPageComponent, ExtractGithubNickPipe, CollaboratorsListComponent],
  imports: [CommonModule, AboutRoutingModule, TuiIslandModule],
})
export class AboutModule {}
