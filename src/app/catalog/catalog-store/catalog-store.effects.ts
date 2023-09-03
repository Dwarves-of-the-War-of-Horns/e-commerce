import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs'

import { CatalogHttpService } from '../services/catalog-http.service'
import { catalogApiActions } from './actions/catalog-api.actions'
import { catalogPageActions } from './actions/catalog-page.actions'
import { productDetailsApiActions } from './actions/product-details-api.actions'
import { productDetailsPageActions } from './actions/product-details-page.actions'
import { selectCategories, selectFilterAttributes } from './catalog-store.selectors'

@Injectable()
export class CatalogEffects {
  private categories$ = this.store$.select(selectCategories)
  private filterAttributes$ = this.store$.select(selectFilterAttributes)
  constructor(
    private store$: Store,
    private actions$: Actions,
    private catalogHttpService: CatalogHttpService,
  ) {}

  private initCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(catalogPageActions.initCategories),
      withLatestFrom(this.categories$),
      filter(([, categories]) => !categories),
      switchMap(() =>
        this.catalogHttpService.getCategories().pipe(
          map(categories => catalogApiActions.initCategoriesSuccess({ categories })),
          catchError(({ message }: Error) => of(catalogApiActions.initCategoriesFailure({ message }))),
        ),
      ),
    ),
  )

  private getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(catalogPageActions.loadProducts),
      switchMap(({ category }) =>
        this.catalogHttpService.loadProducts(category).pipe(
          map(products => catalogApiActions.loadProductsSuccess({ products })),
          catchError(({ message }: Error) => of(catalogApiActions.loadProductsFailure({ message }))),
        ),
      ),
    ),
  )

  private getProductByKey$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productDetailsPageActions.loadProductDetails),
      switchMap(({ productKey }) =>
        this.catalogHttpService.getProductByKey(productKey).pipe(
          map(productDetails => productDetailsApiActions.productDetailsLoadSuccess({ productDetails })),
          catchError(({ message }: Error) =>
            of(productDetailsApiActions.productDetailsLoadFailure({ errorMessage: message })),
          ),
        ),
      ),
    ),
  )

  private loadFilterAttributes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(catalogPageActions.initFilters),
      withLatestFrom(this.filterAttributes$),
      filter(([, filterAttributes]) => !filterAttributes),
      switchMap(() =>
        this.catalogHttpService.loadFilterAttributes().pipe(
          map(filterAttributes => catalogApiActions.loadFilterAttributesSuccess({ filterAttributes })),
          catchError(({ message }: Error) => of(catalogApiActions.loadFilterAttributesFailure({ message }))),
        ),
      ),
    ),
  )
}
