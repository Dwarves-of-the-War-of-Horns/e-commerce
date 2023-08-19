import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiFieldErrorPipe } from '@taiga-ui/kit'

import { AuthRoutingModule } from '../../auth-routing.module'
import { SignInFormComponent } from './sign-in-form.component'

describe('SignInFormComponent', () => {
  let component: SignInFormComponent
  let fixture: ComponentFixture<SignInFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [SignInFormComponent, TuiFieldErrorPipe],
      imports: [CommonModule, AuthRoutingModule, RouterTestingModule],
      providers: [provideMockStore({})],
    }).compileComponents()

    fixture = TestBed.createComponent(SignInFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
