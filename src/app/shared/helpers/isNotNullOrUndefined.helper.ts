import { filter, type Observable } from 'rxjs'

const inputIsNotNullOrUndefined = <T>(input: T): input is NonNullable<T> => input !== null && input !== undefined

export function isNotNullOrUndefined<T>() {
  return (source$: Observable<T>): Observable<NonNullable<T>> => source$.pipe(filter(inputIsNotNullOrUndefined))
}
