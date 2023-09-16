import type { ProductsStateResponse } from 'src/app/shared/models/products-state-response.model'
import type { QueryParams } from 'src/app/shared/models/query-params.model'

export function convertResponseParamsToQueryParams({
  answerQueryParams,
  productProjectionPagedQueryResponse,
}: ProductsStateResponse): QueryParams {
  return {
    category: answerQueryParams.category,
    search: answerQueryParams.search,
    sort: answerQueryParams.sort,
    limit: productProjectionPagedQueryResponse.limit,
    offset: productProjectionPagedQueryResponse.offset,
    total: productProjectionPagedQueryResponse.total,
  }
}
