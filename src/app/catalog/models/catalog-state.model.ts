import type { FilterParams } from 'src/app/shared/models/filter-params.model'
import type { SimpleAttribute } from 'src/app/shared/models/simple-attribute.model'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

export interface CatalogState {
  isLoading: boolean
  message: string | null
  categories: SimpleCategory[] | null
  isProductsLoading: boolean
  products: SimpleProduct[]
  productDetails: SimpleProduct | null
  filterAttributes: SimpleAttribute[] | null
  filterState: FilterParams
}
