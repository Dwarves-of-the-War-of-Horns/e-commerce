export const environment = {
  production: false,
  apiUrl: '',
  projectKey: import.meta.env.EC_PROJECT_KEY,
  authHost: import.meta.env.EC_AUTH_URL,
  apiHost: import.meta.env.EC_API_URL,
  clientId: import.meta.env.EC_CLIENT_ID,
  clientSecret: import.meta.env.EC_CLIENT_SECRET,
  scopes: [import.meta.env.EC_SCOPES],
}
