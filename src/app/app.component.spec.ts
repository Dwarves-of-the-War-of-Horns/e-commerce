import { TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { AppComponent } from './app.component'
import { AuthFacade } from './auth/auth-store/auth.facade'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({}), AuthFacade],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
