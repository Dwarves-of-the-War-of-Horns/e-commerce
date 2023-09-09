import { TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { AppComponent } from './app.component'
import { AuthFacade } from './auth/auth-store/service/auth.facade'
import { CartFacade } from './cart/cart-store/cart.facade'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({}), AuthFacade, CartFacade],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
