import type { QueryParams } from './query-params.model'

export interface FilterParams extends QueryParams {
  limit?: number
  offset?: number
  total?: number
}
