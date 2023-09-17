import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, type Observable } from 'rxjs'

import type { QueryParams } from 'src/app/shared/models/query-params.model'

@Injectable()
export class CatalogQueryParamsService {
  private currentParams$$ = new BehaviorSubject<QueryParams>({ isInitial: true })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public getQueryParams$(): Observable<QueryParams> {
    return this.currentParams$$.asObservable()
  }

  public updateQueryParams(params: QueryParams): void {
    this.currentParams$$.next({ isInitial: false, ...params })

    void this.router.navigate([], {
      relativeTo: this.route,
      replaceUrl: true,
      queryParamsHandling: 'merge',
      queryParams: { ...this.currentParams$$.value, isInitial: undefined },
    })
  }
}
