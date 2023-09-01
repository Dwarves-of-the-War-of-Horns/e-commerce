import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

export interface CatalogState {
  isLoading: boolean
  message: string | null
  categories: SimpleCategory[] | null
}
