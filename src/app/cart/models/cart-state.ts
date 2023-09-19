import type { SimpleCart } from 'src/app/shared/models/simple-cart.model'
import type { SimpleDiscounts } from 'src/app/shared/models/simple-discounts.model'

export interface CartState {
  isLoading: boolean
  error: string | null
  currentCart: SimpleCart | null
  discounts: SimpleDiscounts
  isDiscountsLoading: boolean
}
