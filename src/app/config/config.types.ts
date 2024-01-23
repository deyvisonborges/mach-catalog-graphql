export type ConfigEnvSchema = {
  NODE_ENV: 'development' | 'staging' | 'production'
  DATABASE_URL: string
  DATABASE_PROVIDER: 'postgresql' | 'mysql' | 'mongodb' | 'sqlite' | 'mongodb'
  POSTGRES_HOST: string
  POSTGRES_PORT: string
  POSTGRES_USER: string
  POSTGRES_PASSWORD: string
  POSTGRES_NAME: string
  RATELIMIT_THROTTLE_TTL: number
  RATELIMIT_THROTTLE_LIMIT: number
  REDIS_HOST: string
  REDIS_PORT: number
  SECURITY_JWT_EXPIRES_IN: string
  SECURITY_JWT_ISSUER: string
  SECURITY_JWT_SECRET: string
  SWAGGER_API_ROOT: 'api/docs'
  SWAGGER_API_NAME: 'Mach Ecommerce Service API / Catalog Graphql'
  SWAGGER_API_DESCRIPTION: 'API Description'
  SWAGGER_API_CURRENT_VERSION: '1.0'
}
