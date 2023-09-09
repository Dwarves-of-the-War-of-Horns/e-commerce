import type { TuiDay } from '@taiga-ui/cdk'

export interface UserInformation {
  dateOfBirth: TuiDay
  firstName: string
  lastName: string
  email: string
  version: number
}
