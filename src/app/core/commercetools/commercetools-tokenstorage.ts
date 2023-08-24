import type { TokenCache, TokenStore } from '@commercetools/sdk-client-v2'

import type { LocalStorageService } from '../storage/services/local-storage.service'
import { tokenStorageKey } from './constants/commercetools-token-storage-key'
import type { CommercetoolsTokenFlow } from './enums/commercetools-token-flow.enum'

type ExtendedTokenStore = TokenStore & {
  flowKey: CommercetoolsTokenFlow
}

export class TokenStorage implements TokenCache {
  private current: ExtendedTokenStore | Record<string, never>
  private readonly key = tokenStorageKey
  constructor(
    private localStorageService: LocalStorageService,
    private readonly flowKey: CommercetoolsTokenFlow,
    private refreshToken?: string,
  ) {
    const storedToken = this.localStorageService.getItem<ExtendedTokenStore>(this.key)
    this.current = storedToken?.flowKey === this.flowKey ? storedToken : {}
  }

  get(): TokenStore {
    return this.current as TokenStore
  }

  set(newValue: TokenStore): TokenStore {
    this.refreshToken = newValue.refreshToken ?? this.refreshToken
    this.current = { ...newValue, refreshToken: this.refreshToken, flowKey: this.flowKey }
    this.localStorageService.setItem(this.key, this.current)

    return this.current
  }
}
