import type { FormControl } from '@angular/forms'
import type { Subscription } from 'rxjs'

export const subscribeToValueChangesOnForms = (arrayForms: FormControl[]): Subscription[] => {
  return arrayForms.map(
    (fromControl): Subscription =>
      fromControl.valueChanges.subscribe(() => {
        fromControl.markAsTouched()
      }),
  )
}
