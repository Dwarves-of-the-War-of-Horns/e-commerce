import { TestBed } from '@angular/core/testing'
import type { CanMatchFn } from '@angular/router'
import { Store, StoreModule } from '@ngrx/store'

import { authGuard } from './auth.guard'

describe('AuthGuard', () => {
  let guard: CanMatchFn

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [Store],
    })
    guard = authGuard
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
