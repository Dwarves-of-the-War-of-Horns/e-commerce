import type { Cart } from '@commercetools/platform-sdk'

export interface CartState {
  isLoading: boolean
  error: string | null
  currentCart: Cart | null
}
