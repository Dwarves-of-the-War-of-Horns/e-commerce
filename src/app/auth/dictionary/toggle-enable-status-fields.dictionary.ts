import type { FormControl } from '@angular/forms'

export const toggleEnableStatusFields: Record<string, (arrayFormControls: FormControl[]) => void> = {
  true: (arrayFormControls: FormControl[]): void => {
    arrayFormControls.forEach(formControl => {
      formControl.disable()
    })
  },
  false: (arrayFormControls: FormControl[]): void => {
    arrayFormControls.forEach(formControl => {
      formControl.enable()
    })
  },
}
