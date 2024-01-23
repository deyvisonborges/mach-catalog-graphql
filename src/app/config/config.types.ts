export type ConfigEnvSchema = {
  NODE_ENV: 'development' | 'staging' | 'production'
  POSTGRES_HOST: string
  POSTGRES_PORT: string
  POSTGRES_USER: string
  POSTGRES_PASSWORD: string
  POSTGRES_NAME: string
}
