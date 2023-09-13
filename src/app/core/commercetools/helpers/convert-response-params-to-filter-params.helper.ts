import type { FilterParams } from 'src/app/shared/models/filter-params.model'
import type { ProductsStateResponse } from 'src/app/shared/models/products-state-response.model'

export function convertResponseParamsToFilterParams({
  answerQueryParams,
  productProjectionPagedQueryResponse,
}: ProductsStateResponse): FilterParams {
  return {
    category: answerQueryParams.category,
    search: answerQueryParams.search,
    sort: answerQueryParams.sort,
    limit: productProjectionPagedQueryResponse.limit,
    offset: productProjectionPagedQueryResponse.offset,
    total: productProjectionPagedQueryResponse.total,
  }
}
