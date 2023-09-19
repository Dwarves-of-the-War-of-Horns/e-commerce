import { CommonModule } from '@angular/common'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiErrorModule } from '@taiga-ui/core'
import {
  TuiAccordionModule,
  TuiCheckboxBlockModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
  TuiSelectModule,
} from '@taiga-ui/kit'

import { UserInformationComponent } from './user-information.component'
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module'
import { AuthFacade } from 'src/app/auth/auth-store/service/auth.facade'

describe('UserInformationComponent', () => {
  let component: UserInformationComponent
  let fixture: ComponentFixture<UserInformationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInformationComponent],
      imports: [
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
        TuiIslandModule,
        TuiDialogModule,
        TuiButtonModule,
      ],
      providers: [provideMockStore({}), AuthFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(UserInformationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
