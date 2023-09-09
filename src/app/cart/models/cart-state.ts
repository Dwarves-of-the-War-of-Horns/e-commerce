import type { Cart, CartPagedQueryResponse } from '@commercetools/platform-sdk'

export interface CartState {
  isLoading: boolean
  carts: CartPagedQueryResponse | null
  error: string | null
  currentCart: Cart | null
}
