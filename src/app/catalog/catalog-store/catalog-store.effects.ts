import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { CatalogHttpService } from '../services/catalog-http.service'
import { catalogApiActions } from './actions/catalog-api.actions'
import { catalogPageActions } from './actions/catalog-page.actions'

@Injectable()
export class CatalogEffects {
  constructor(
    private actions$: Actions,
    private catalogHttpService: CatalogHttpService,
  ) {}

  private initCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(catalogPageActions.initCatalog),
      switchMap(() =>
        this.catalogHttpService.getCategories().pipe(
          map(categories => catalogApiActions.initCatalogSuccess({ categories })),
          catchError(({ message }: Error) => of(catalogApiActions.initCatalogFailure({ message }))),
        ),
      ),
    ),
  )
}
