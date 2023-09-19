/* eslint-disable @typescript-eslint/naming-convention */
interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly NG_APP_ENV: string
  readonly EC_PROJECT_KEY: string
  readonly EC_CLIENT_SECRET: string
  readonly EC_CLIENT_ID: string
  readonly EC_AUTH_URL: string
  readonly EC_API_URL: string
  readonly EC_SCOPES: string
  [key: string]: string
}
