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

@Injectable({
  providedIn: 'root',
})
export class CommercetoolsClientBuilder {
  private ls: LocalStorageService = inject(LocalStorageService)
  private activeClient!: Client
  private readonly projectKey = import.meta.env.EC_PROJECT_KEY
  private readonly authHost = import.meta.env.EC_AUTH_URL
  private readonly apiHost = import.meta.env.EC_API_URL
  private readonly credentials = {
    clientId: import.meta.env.EC_CLIENT_ID,
    clientSecret: import.meta.env.EC_CLIENT_SECRET,
  }
  private readonly scopes = [import.meta.env.EC_SCOPES]
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
    return new TokenStorage(this.ls, flowKey, refreshToken)
  }

  public getDefaultClient(): ByProjectKeyRequestBuilder {
    this.activeClient = new ClientBuilder()
      .withAnonymousSessionFlow({ ...this.authOptions, tokenCache: this.getTokenStorage(CommercetoolsTokenFlow.anon) })
      .withHttpMiddleware(this.httpOptions)
      .withLoggerMiddleware()
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
      .withLoggerMiddleware()
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
      .withLoggerMiddleware()
      .build()

    return createApiBuilderFromCtpClient(this.activeClient).withProjectKey({ projectKey: this.projectKey })
  }
}
