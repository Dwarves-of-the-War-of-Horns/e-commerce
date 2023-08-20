import { TestBed } from '@angular/core/testing'
import type { CanActivateFn } from '@angular/router'

import { authGuard } from './auth.guard'

describe('AuthGuard', () => {
  const guard: CanActivateFn = authGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
