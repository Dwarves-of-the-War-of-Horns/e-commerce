import { filter, type Observable } from 'rxjs'

type PropNonNullable<T, TKey extends keyof T> = T & { [P in TKey]-?: NonNullable<T[P]> }

export const propertyIsNotNullish =
  <T, TKey extends keyof T>(key: TKey) =>
  (input: T): input is PropNonNullable<T, TKey> =>
    input?.[key] !== null && input?.[key] !== undefined

export function propertyIsNotNullOrUndefined<T, TKey extends keyof T>(property: TKey) {
  return (source$: Observable<T>): Observable<PropNonNullable<T, TKey>> =>
    source$.pipe(filter(propertyIsNotNullish(property)))
}
