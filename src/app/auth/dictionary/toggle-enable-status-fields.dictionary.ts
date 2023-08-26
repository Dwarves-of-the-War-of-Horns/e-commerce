import type { FormControl } from '@angular/forms'

export const toggleEnableStatusFields: Record<string, (arrayFormControls: FormControl[]) => void> = {
  false: (arrayFormControls: FormControl[]): void => {
    arrayFormControls.forEach(formControl => {
      formControl.disable()
    })
  },
  true: (arrayFormControls: FormControl[]): void => {
    arrayFormControls.forEach(formControl => {
      formControl.enable()
    })
  },
}
