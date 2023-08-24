import type { TuiAlertService } from '@taiga-ui/core'
import type { Subscription } from 'rxjs/internal/Subscription'

export const alertsAuth: Record<string, (alertService: TuiAlertService, action: string) => Subscription> = {
  true: (alertService: TuiAlertService, action: string): Subscription => {
    return alertService.open(`You have successfully ${action}`, { label: 'Success!', status: 'success' }).subscribe()
  },
  false: (alertService: TuiAlertService, action: string): Subscription => {
    return alertService.open(action, { label: 'Error!', status: 'error', autoClose: false }).subscribe()
  },
}
