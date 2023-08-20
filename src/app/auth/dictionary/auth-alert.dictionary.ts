import type { TuiAlertService } from '@taiga-ui/core'

export const alertsAuth: Record<string, (alertService: TuiAlertService, action: string) => void> = {
  true: (alertService: TuiAlertService, action: string): void => {
    alertService.open(`You have successfully ${action}`, { label: 'Success!', status: 'success' }).subscribe()
  },
  false: (alertService: TuiAlertService, action: string): void => {
    alertService.open(`An error occurred during ${action}`, { label: 'Error!', status: 'error' }).subscribe()
  },
}
