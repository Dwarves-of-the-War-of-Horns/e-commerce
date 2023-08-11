import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { SignUpComponent } from './sign-up.component'

describe('SignUpComponent', () => {
  let component: SignUpComponent
  let fixture: ComponentFixture<SignUpComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [SignUpComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SignUpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
