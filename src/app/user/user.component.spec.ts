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
  TuiFieldErrorPipe,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
  TuiSelectModule,
} from '@taiga-ui/kit'

import { AuthRoutingModule } from '../auth/auth-routing.module'
import { AuthFacade } from '../auth/auth-store/service/auth.facade'
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component'
import { UserInformationComponent } from './components/user-information/user-information.component'
import { UserComponent } from './user.component'

describe('UserComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent, UserAddressesComponent, UserInformationComponent, TuiFieldErrorPipe],
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

    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
