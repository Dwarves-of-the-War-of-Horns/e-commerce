import type { SimpleCart } from 'src/app/shared/models/simple-cart.model'

export interface CartState {
  isLoading: boolean
  error: string | null
  currentCart: SimpleCart | null
}
