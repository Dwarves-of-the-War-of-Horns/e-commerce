import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs'

import { CatalogHttpService } from '../services/catalog-http.service'
import { catalogApiActions } from './actions/catalog-api.actions'
import { catalogPageActions } from './actions/catalog-page.actions'
import { selectCategories } from './catalog-store.selectors'

@Injectable()
export class CatalogEffects {
  public categories$ = this.store$.select(selectCategories)
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
      ofType(catalogPageActions.getProducts),
      switchMap(() =>
        this.catalogHttpService.getProducts().pipe(
          map(products => catalogApiActions.getProductsSuccess({ products })),
          catchError(({ message }: Error) => of(catalogApiActions.getProductsFailure({ message }))),
        ),
      ),
    ),
  )
}
