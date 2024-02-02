export type ConfigEnvSchema = {
  NODE_ENV: 'development' | 'staging' | 'production'
  POSTGRES_HOST: string
  POSTGRES_PORT: string
  POSTGRES_USER: string
  POSTGRES_PASSWORD: string
  POSTGRES_NAME: string
  DATABASE_URL: string
  RABBITMQ_USER: string
  RABBITMQ_PASSWORD: string
  RABBITMQ_CONNECTION: string
}
