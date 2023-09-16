import { Component } from '@angular/core'

import { CatalogPagination } from '../../../core/commercetools/enums/catalog-pagination.enum'
import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import { CatalogUrlTreeService } from '../../services/catalog-url.service'
import { calculateChunk } from '../../utils/calculate-chunk.util'
import { calculatePaginationLength } from '../../utils/calculate-pagination-length.util'
import type { QueryParams } from 'src/app/shared/models/query-params.model'

@Component({
  selector: 'ec-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  public paginationIndex = CatalogPagination.Offset

  public queryState: QueryParams = {
    offset: CatalogPagination.Offset,
    total: CatalogPagination.Total,
    limit: CatalogPagination.QuantityProducts,
  }

  constructor(
    private catalogFacade: CatalogFacade,
    private queryParamsService: CatalogQueryParamsService,
    private urlTreeService: CatalogUrlTreeService,
  ) {
    this.catalogFacade.queryState$.subscribe(queryState => {
      this.queryState = {
        ...queryState,
        total: calculatePaginationLength(queryState?.total || 1, queryState?.limit || 1),
      }
    })
  }

  public goToPage(index: number): void {
    this.paginationIndex = index
    Object.assign(this.queryState, {
      offset: calculateChunk(index, this.queryState.limit || CatalogPagination.QuantityProducts),
    })
    this.catalogFacade.loadProducts(this.queryState)
  }
}
