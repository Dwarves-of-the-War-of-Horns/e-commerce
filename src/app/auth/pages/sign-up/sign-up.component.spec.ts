import { CommonModule } from '@angular/common'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiDataListModule, TuiErrorModule } from '@taiga-ui/core'
import {
  TuiAccordionModule,
  TuiCheckboxBlockModule,
  TuiFieldErrorPipe,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
  TuiSelectModule,
} from '@taiga-ui/kit'

import { AuthRoutingModule } from '../../auth-routing.module'
import { AuthFacade } from '../../auth-store/service/auth.facade'
import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component'
import { SignUpComponent } from './sign-up.component'

describe('SignUpComponent', () => {
  let component: SignUpComponent
  let fixture: ComponentFixture<SignUpComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent, SignUpFormComponent, TuiFieldErrorPipe],
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
        TuiAccordionModule,
        TuiInputDateModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiCheckboxBlockModule,
        NoopAnimationsModule,
      ],
      providers: [provideMockStore({}), AuthFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(SignUpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
