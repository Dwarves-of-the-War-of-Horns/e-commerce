import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiFieldErrorPipe } from '@taiga-ui/kit'

import { AuthRoutingModule } from '../../auth-routing.module'
import { AuthFacade } from '../../auth-store/auth.facade'
import { SignUpFormComponent } from './sign-up-form.component'

describe('SingUpFormComponent', () => {
  let component: SignUpFormComponent
  let fixture: ComponentFixture<SignUpFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [SignUpFormComponent, TuiFieldErrorPipe],
      imports: [CommonModule, AuthRoutingModule],
      providers: [provideMockStore({}), AuthFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(SignUpFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
