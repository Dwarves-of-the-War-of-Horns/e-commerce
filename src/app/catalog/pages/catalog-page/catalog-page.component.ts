import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { combineLatest, distinctUntilChanged, filter, map, type Subscription, tap } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import { CatalogUrlTreeService } from '../../services/catalog-url.service'

@Component({
  selector: 'ec-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit, OnDestroy {
  public isSidebarOpen = false

  private catalogData$ = combineLatest([
    this.catalogFacade.categories$,
    this.activeRoute.params,
    this.queryParamsService.getQueryParams$(),
  ]).pipe(map(([categories, params, queryParams]) => ({ categories, params, queryParams })))

  public navigationArray$ = this.urlTreeService.getNavigationArray$()
  public productsData$ = this.catalogFacade.productsData$
  private subscription!: Subscription

  // eslint-disable-next-line max-params
  constructor(
    private catalogFacade: CatalogFacade,
    private activeRoute: ActivatedRoute,
    private urlTreeService: CatalogUrlTreeService,
    private queryParamsService: CatalogQueryParamsService,
  ) {}
  public ngOnInit(): void {
    this.subscription = this.catalogData$
      .pipe(
        tap(() => {
          this.catalogFacade.initCategories()
          this.catalogFacade.initFilters()
        }),
        filter(({ categories, queryParams }) => Boolean(categories) && !queryParams.isInitial),
        tap(({ params, categories }) => {
          const convertParams = typeof params['category'] === 'string' ? params['category'].split('/') : null

          this.urlTreeService.updateCurrentUrl(convertParams)
          this.urlTreeService.convertUrlTreeToNavigationArray(categories)
        }),
        map(({ categories, queryParams }) => {
          const category = this.urlTreeService.convertUrlTreeToSimpleCategory(categories)?.id

          return { category, ...queryParams }
        }),
        distinctUntilChanged((prev, current) => prev === current),
      )
      .subscribe(queryParams => {
        this.catalogFacade.loadProducts(queryParams)
      })
  }

  public toggleSidebar(isOpen: boolean): void {
    this.isSidebarOpen = isOpen
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
