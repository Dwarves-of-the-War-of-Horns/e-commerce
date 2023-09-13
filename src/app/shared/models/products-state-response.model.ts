import type { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk'

import type { QueryParams } from './query-params.model'

export interface ProductsStateResponse {
  answerQueryParams: QueryParams
  productProjectionPagedQueryResponse: ProductProjectionPagedQueryResponse
}
