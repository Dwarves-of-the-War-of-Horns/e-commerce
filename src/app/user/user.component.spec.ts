import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { AuthFacade } from '../auth/auth-store/service/auth.facade'
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component'
import { UserInformationComponent } from './components/user-information/user-information.component'
import { UserComponent } from './user.component'

describe('UserComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [UserComponent, UserAddressesComponent, UserInformationComponent],
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
