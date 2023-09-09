import { TestBed } from '@angular/core/testing'
import type { CanMatchFn } from '@angular/router'

import { userGuard } from './user.guard'

describe('userGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => userGuard(...guardParameters))

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should be created', () => {
    expect(executeGuard).toBeTruthy()
  })
})
