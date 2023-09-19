import type { MyCustomerChangePassword } from '@commercetools/platform-sdk'

export interface ChangePasswordProps extends MyCustomerChangePassword {
  username: string
}
