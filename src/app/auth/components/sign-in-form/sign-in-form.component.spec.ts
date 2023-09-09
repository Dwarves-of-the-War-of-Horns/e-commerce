import { CommonModule } from '@angular/common'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiErrorModule } from '@taiga-ui/core'
import { TuiFieldErrorPipe, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit'

import { AuthRoutingModule } from '../../auth-routing.module'
import { AuthFacade } from '../../auth-store/service/auth.facade'
import { SignInFormComponent } from './sign-in-form.component'

describe('SignInFormComponent', () => {
  let component: SignInFormComponent
  let fixture: ComponentFixture<SignInFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInFormComponent, TuiFieldErrorPipe],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        AuthRoutingModule,
        RouterTestingModule,
        TuiInputModule,
        TuiErrorModule,
        TuiInputPasswordModule,
        FormsModule,
      ],
      providers: [provideMockStore({}), AuthFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(SignInFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
