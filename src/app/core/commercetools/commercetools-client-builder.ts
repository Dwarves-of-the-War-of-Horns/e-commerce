import { inject, Injectable } from '@angular/core'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { type ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder'
import {
  type AuthMiddlewareOptions,
  type Client,
  ClientBuilder,
  type HttpMiddlewareOptions,
  type UserAuthOptions,
} from '@commercetools/sdk-client-v2'

import { LocalStorageService } from '../storage/services/local-storage.service'
import { TokenStorage } from './commercetools-tokenstorage'
import { CommercetoolsTokenFlow } from './enums/commercetools-token-flow.enum'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CommercetoolsClientBuilder {
  private localStorageService: LocalStorageService = inject(LocalStorageService)
  private activeClient!: Client
  private readonly projectKey = environment.projectKey
  private readonly authHost = environment.authHost
  private readonly apiHost = environment.apiHost
  private readonly credentials = {
    clientId: environment.clientId,
    clientSecret: environment.clientSecret,
  }
  private readonly scopes = environment.scopes
  private httpOptions: HttpMiddlewareOptions = {
    host: this.apiHost,
    fetch,
  }
  private authOptions: AuthMiddlewareOptions = {
    host: this.authHost,
    projectKey: this.projectKey,
    credentials: this.credentials,
    scopes: this.scopes,
    fetch,
  }

  private getTokenStorage(flowKey: CommercetoolsTokenFlow, refreshToken?: string): TokenStorage {
    return new TokenStorage(this.localStorageService, flowKey, refreshToken)
  }

  public getDefaultClient(): ByProjectKeyRequestBuilder {
    this.activeClient = new ClientBuilder()
      .withAnonymousSessionFlow({ ...this.authOptions, tokenCache: this.getTokenStorage(CommercetoolsTokenFlow.anon) })
      .withHttpMiddleware(this.httpOptions)
      .build()

    return createApiBuilderFromCtpClient(this.activeClient).withProjectKey({ projectKey: this.projectKey })
  }

  public getPasswordClient(user: UserAuthOptions): ByProjectKeyRequestBuilder {
    this.activeClient = new ClientBuilder()
      .withHttpMiddleware(this.httpOptions)
      .withPasswordFlow({
        ...this.authOptions,
        credentials: { ...this.credentials, user },
        tokenCache: this.getTokenStorage(CommercetoolsTokenFlow.password),
      })
      .build()

    return createApiBuilderFromCtpClient(this.activeClient).withProjectKey({ projectKey: this.projectKey })
  }

  public getRefreshTokenClient(token: string): ByProjectKeyRequestBuilder {
    this.activeClient = new ClientBuilder()
      .withRefreshTokenFlow({
        ...this.authOptions,
        refreshToken: token,
        tokenCache: this.getTokenStorage(CommercetoolsTokenFlow.refresh, token),
      })
      .withHttpMiddleware(this.httpOptions)
      .build()

    return createApiBuilderFromCtpClient(this.activeClient).withProjectKey({ projectKey: this.projectKey })
  }
}
