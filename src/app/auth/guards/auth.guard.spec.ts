import { TestBed } from '@angular/core/testing'
import { Store, StoreModule } from '@ngrx/store'

import { AuthGuard } from './auth.guard'

describe('AuthGuard', () => {
  let guard: AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [AuthGuard, Store],
    })
    guard = TestBed.inject(AuthGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
