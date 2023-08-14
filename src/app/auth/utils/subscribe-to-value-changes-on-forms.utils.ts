import type { FormControl } from '@angular/forms'

export const subscribeToValueChangesOnForms = (arrayForms: FormControl[]): void => {
  arrayForms.forEach(fromControl => {
    fromControl.valueChanges.subscribe(() => {
      if (fromControl.touched) {
        return
      }

      fromControl.markAsTouched()
    })
  })
}
