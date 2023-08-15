import { inject, Injectable } from '@angular/core'
import type { Customer, MyCustomerDraft, Project } from '@commercetools/platform-sdk'
import type { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder'
import type { TokenStore, UserAuthOptions } from '@commercetools/sdk-client-v2'
import { map, type Observable } from 'rxjs'
import { fromPromise } from 'rxjs/internal/observable/innerFrom'

import { LocalStorageService } from '../../storage/services/local-storage.service'
import { CommercetoolsClientBuilder } from '../commercetools-client-builder'
import { tokenStorageKey } from '../constants/commercetools-token-storage-key'

@Injectable({
  providedIn: 'root',
})
export class CommercetoolsHttpService {
  private ls: LocalStorageService = inject(LocalStorageService)
  private builder: CommercetoolsClientBuilder = inject(CommercetoolsClientBuilder)
  private api: ByProjectKeyRequestBuilder

  constructor() {
    const storedToken = this.ls.getItem<TokenStore>(tokenStorageKey)

    if (storedToken?.refreshToken) {
      this.api = this.builder.getRefreshTokenClient(storedToken.refreshToken)
    } else {
      this.api = this.builder.getDefaultClient()
    }
  }

  public getProject(): Observable<Project | undefined> {
    return fromPromise(this.api.get().execute()).pipe(
      map(result => {
        return result.body
      }),
    )
  }

  public signIn(user: UserAuthOptions): Observable<Customer> {
    const { username: email, password } = user
    this.api = this.builder.getPasswordClient(user)

    return fromPromise(this.api.me().login().post({ body: { email, password } }).execute()).pipe(
      map(result => {
        return result.body.customer
      }),
    )
  }

  public getUserInfo(): Observable<Customer> {
    return fromPromise(this.api.me().get().execute()).pipe(
      map(result => {
        return result.body
      }),
    )
  }

  public signUp(customer: MyCustomerDraft): Observable<Customer> {
    const { email: username, password } = customer
    this.api = this.builder.getPasswordClient({ username, password })

    return fromPromise(this.api.me().signup().post({ body: customer }).execute()).pipe(
      map(result => {
        return result.body.customer
      }),
    )
  }

  public logOut(): void {
    this.ls.removeItem(tokenStorageKey)
    this.api = this.builder.getDefaultClient()
  }
}
