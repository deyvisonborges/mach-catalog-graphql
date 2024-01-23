/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const generateEnvFile = config => {
  const envContent = Object.entries(config)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')

  return envContent
}

const configEnv = {
  ENVIRONMENT: 'development',
  DATABASE_URL: 'your_database_url',
  DATABASE_PROVIDER: 'postgresql',
  RATELIMIT_THROTTLE_TTL: 5000,
  RATELIMIT_THROTTLE_LIMIT: 100,
  REDIS_HOST: 'localhost',
  REDIS_PORT: 6379,
  SECURITY_JWT_EXPIRES_IN: '1d',
  SECURITY_JWT_ISSUER: 'your_issuer',
  SECURITY_JWT_SECRET: 'your_secret',
  SWAGGER_API_ROOT: 'api/docs',
  SWAGGER_API_NAME: 'Mach Ecommerce Service API / Catalog Graphql',
  SWAGGER_API_DESCRIPTION: 'API Description',
  SWAGGER_API_CURRENT_VERSION: '1.0'
}

const generateEnvFiles = () => {
  const environments = ['development', 'staging', 'production']

  environments.forEach(env => {
    const envConfig = {
      ...configEnv,
      ENVIRONMENT: env
    }

    const envFilePath = path.join(__dirname, `.env.${env}`)
    const envContent = generateEnvFile(envConfig)

    fs.writeFileSync(envFilePath, envContent)

    console.log(`Created ${envFilePath}`)
  })
}

generateEnvFiles()
