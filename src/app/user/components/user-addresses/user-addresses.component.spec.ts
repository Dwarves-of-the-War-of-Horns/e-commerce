import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { UserAddressesComponent } from './user-addresses.component'
import { AuthFacade } from 'src/app/auth/auth-store/auth.facade'

describe('UserAddressesComponent', () => {
  let component: UserAddressesComponent
  let fixture: ComponentFixture<UserAddressesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [UserAddressesComponent],
      providers: [provideMockStore({}), AuthFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(UserAddressesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
