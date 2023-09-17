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
import { SignUpFormComponent } from './sign-up-form.component'

describe('SingUpFormComponent', () => {
  let component: SignUpFormComponent
  let fixture: ComponentFixture<SignUpFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFormComponent, TuiFieldErrorPipe],
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

    fixture = TestBed.createComponent(SignUpFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
