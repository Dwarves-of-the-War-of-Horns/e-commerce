import { CommonModule } from '@angular/common'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiErrorModule } from '@taiga-ui/core'
import { TuiFieldErrorPipe, TuiInputModule, TuiInputPasswordModule, TuiIslandModule } from '@taiga-ui/kit'

import { AuthRoutingModule } from '../../auth-routing.module'
import { AuthFacade } from '../../auth-store/service/auth.facade'
import { SignInFormComponent } from '../../components/sign-in-form/sign-in-form.component'
import { SignInComponent } from './sign-in.component'

describe('SignInComponent', () => {
  let component: SignInComponent
  let fixture: ComponentFixture<SignInComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent, SignInFormComponent, TuiFieldErrorPipe],
      imports: [
        TuiIslandModule,
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

    fixture = TestBed.createComponent(SignInComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
