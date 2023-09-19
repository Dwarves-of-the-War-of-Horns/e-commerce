import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { CourseLogoComponent } from './course-logo.component'

describe('CourseLogoComponent', () => {
  let component: CourseLogoComponent
  let fixture: ComponentFixture<CourseLogoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseLogoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CourseLogoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
