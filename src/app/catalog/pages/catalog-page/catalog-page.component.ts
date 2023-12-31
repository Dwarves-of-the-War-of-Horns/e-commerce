import { ChangeDetectionStrategy, Component, Inject, type OnInit, Self } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TuiDestroyService } from '@taiga-ui/cdk'
import { combineLatest, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import { CatalogUrlTreeService } from '../../services/catalog-url.service'
import { propertyIsNotNullOrUndefined } from 'src/app/shared/helpers/propertyIsNotNullOrUndefined.helper'

@Component({
  selector: 'ec-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class CatalogPageComponent implements OnInit {
  public currentPageIndex = 0
  public isSidebarOpen = false
  private catalogData$ = combineLatest([
    this.catalogFacade.categories$,
    this.activeRoute.params,
    this.activeRoute.queryParams,
    this.queryParamsService.getQueryParams$(),
  ]).pipe(
    map(([categories, params, routeQueryParams, queryParams]) => ({
      categories,
      params,
      page: routeQueryParams?.['page'] as number | undefined,
      queryParams,
    })),
  )
  public navigationArray$ = this.urlTreeService.getNavigationArray$()
  public productsData$ = this.catalogFacade.productsData$
  public pages$ = this.catalogFacade.pages$

  // eslint-disable-next-line max-params
  constructor(
    private catalogFacade: CatalogFacade,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private urlTreeService: CatalogUrlTreeService,
    private queryParamsService: CatalogQueryParamsService,
    @Self()
    @Inject(TuiDestroyService)
    private destroy$: TuiDestroyService,
  ) {}
  public ngOnInit(): void {
    this.catalogData$
      .pipe(
        takeUntil(this.destroy$),
        tap(({ categories }) => {
          if (!categories) {
            this.catalogFacade.initCategories()
          }
        }),
        propertyIsNotNullOrUndefined('categories'),
        filter(({ queryParams }) => !queryParams.isInitial),
        tap(({ params, categories, page }) => {
          this.urlTreeService.updateCurrentUrl(
            typeof params['category'] === 'string' ? params['category'].split('/') : null,
          )
          this.urlTreeService.convertUrlTreeToNavigationArray(categories)

          if (this.currentPageIndex + 1 !== page) {
            this.currentPageIndex = page ? page - 1 : 0
          }
        }),
        map(({ categories, queryParams, page }) => {
          const category = this.urlTreeService.convertUrlTreeToSimpleCategory(categories)?.id

          return { category, page, ...queryParams }
        }),
        distinctUntilChanged((prev, current) => JSON.stringify(prev) === JSON.stringify(current)),
      )
      .subscribe(queryParams => {
        this.catalogFacade.loadProducts({ page: this.currentPageIndex, queryParams })
      })
  }

  public toggleSidebar(isOpen: boolean): void {
    this.isSidebarOpen = isOpen
  }

  public goToPage(pageIndex: number): void {
    this.currentPageIndex = pageIndex
    void this.router.navigate([], {
      relativeTo: this.activeRoute,
      replaceUrl: true,
      queryParamsHandling: 'merge',
      queryParams: { page: this.currentPageIndex > 0 ? this.currentPageIndex + 1 : undefined },
    })
  }
}
