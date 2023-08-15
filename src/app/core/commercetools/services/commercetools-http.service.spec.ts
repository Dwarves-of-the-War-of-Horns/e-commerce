import { TestBed } from '@angular/core/testing'

import { CommercetoolsHttpService } from './commercetools-http.service'

describe('CommercetoolsHttpService', () => {
  let service: CommercetoolsHttpService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CommercetoolsHttpService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
