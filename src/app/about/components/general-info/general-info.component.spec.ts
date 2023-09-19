import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiIslandModule } from '@taiga-ui/kit'

import { GeneralInfoComponent } from './general-info.component'

describe('GeneralInfoComponent', () => {
  let component: GeneralInfoComponent
  let fixture: ComponentFixture<GeneralInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInfoComponent],
      imports: [TuiIslandModule],
    }).compileComponents()

    fixture = TestBed.createComponent(GeneralInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
