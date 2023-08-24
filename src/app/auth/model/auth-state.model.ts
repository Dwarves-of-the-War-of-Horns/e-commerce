import type { Customer } from '@commercetools/platform-sdk'

export interface AuthState {
  authData: Customer | null
  isLoading: boolean
  error: string | null
  isLoggedIn: boolean
}
