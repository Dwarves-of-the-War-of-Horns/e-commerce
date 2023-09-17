import { Injectable } from '@angular/core'
import { BehaviorSubject, type Observable } from 'rxjs'

import type { QueryParams } from 'src/app/shared/models/query-params.model'

@Injectable()
export class CatalogQueryParamsService {
  private currentParams$$ = new BehaviorSubject<QueryParams>({ isInitial: true })

  public getQueryParams$(): Observable<QueryParams> {
    return this.currentParams$$.asObservable()
  }

  public updateQueryParams(params: QueryParams): void {
    this.currentParams$$.next({ isInitial: false, ...params })
  }
}
