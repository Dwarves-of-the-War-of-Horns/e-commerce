import type { TuiAlertService } from '@taiga-ui/core'
import type { Subscription } from 'rxjs/internal/Subscription'

import { AlertsStatus } from 'src/app/shared/enums/alerts-status.enum'

export const alertsHelper: Record<string, (alertService: TuiAlertService, action: string) => Subscription> = {
  true: (alertService: TuiAlertService, action: string): Subscription => {
    return alertService
      .open(`You have successfully ${action}`, {
        label: AlertsStatus.UpperCaseSuccess,
        status: AlertsStatus.Success,
        autoClose: true,
      })
      .subscribe()
  },
  false: (alertService: TuiAlertService, action: string): Subscription => {
    return alertService
      .open(action, { label: AlertsStatus.UpperCaseError, status: AlertsStatus.Error, autoClose: true })
      .subscribe()
  },
}
