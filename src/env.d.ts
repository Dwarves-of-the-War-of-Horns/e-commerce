/* eslint-disable @typescript-eslint/naming-convention */
interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly NG_APP_ENV: string
  [key: string]: string
}
