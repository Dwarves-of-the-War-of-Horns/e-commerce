import { Component, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { combineLatest, map, tap } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogUrlTreeService } from '../../services/catalog-url.service'

@Component({
  selector: 'ec-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  public isSidebarOpen = false
  private catalogData$ = combineLatest([this.catalogFacade.categories$, this.activeRoute.params]).pipe(
    map(([categories, params]) => ({ categories, params })),
  )
  public navigationArray$ = this.urlTreeService.getNavigationArray$()
  public products$ = this.catalogFacade.products$
  public isProductsLoading$ = this.catalogFacade.isProductsLoading$

  constructor(
    private catalogFacade: CatalogFacade,
    private activeRoute: ActivatedRoute,
    private urlTreeService: CatalogUrlTreeService,
  ) {}
  public ngOnInit(): void {
    this.catalogData$
      .pipe(
        tap(() => {
          this.catalogFacade.initCategories()
        }),
        tap(({ params, categories }) => {
          this.urlTreeService.updateCurrentUrl(
            typeof params['category'] === 'string' ? params['category'].split('/') : null,
          )
          this.urlTreeService.convertUrlTreeToNavigationArray(categories)
        }),
        map(({ categories }) => this.urlTreeService.convertUrlTreeToSimpleCategory(categories)),
        map(category => this.urlTreeService.updateCurrentCategory(category)),
      )
      .subscribe(category => {
        this.catalogFacade.loadProducts(category)
      })
  }

  public toggleSidebar(isOpen: boolean): void {
    this.isSidebarOpen = isOpen
  }
}
