import type { FormControl } from '@angular/forms'
import type { Subscription } from 'rxjs'

export const subscribeToValueChangesOnForms = (arrayForms: FormControl[]): Subscription[] => {
  return arrayForms.map((fromControl): Subscription => {
    const subscribe = fromControl.valueChanges.subscribe(() => {
      fromControl.markAsTouched()
    })

    return subscribe
  })
}
