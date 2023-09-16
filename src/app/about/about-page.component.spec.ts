import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiIslandModule } from '@taiga-ui/kit'

import { AboutPageComponent } from './about-page.component'
import { ExtractGithubNickPipe } from './pipes/extract-github-nick.pipe'

describe('AboutPageComponent', () => {
  let component: AboutPageComponent
  let fixture: ComponentFixture<AboutPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutPageComponent, ExtractGithubNickPipe],
      imports: [TuiIslandModule],
    }).compileComponents()

    fixture = TestBed.createComponent(AboutPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
