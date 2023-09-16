import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiIslandModule } from '@taiga-ui/kit'

import { ExtractGithubNickPipe } from '../../pipes/extract-github-nick.pipe'
import { CollaboratorsListComponent } from './collaborators-list.component'

describe('CollaboratorsListComponent', () => {
  let component: CollaboratorsListComponent
  let fixture: ComponentFixture<CollaboratorsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaboratorsListComponent, ExtractGithubNickPipe],
      imports: [TuiIslandModule],
    }).compileComponents()

    fixture = TestBed.createComponent(CollaboratorsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
