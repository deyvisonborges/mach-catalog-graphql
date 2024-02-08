import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from 'src/app/config/config.module'
import { ConfigEnvSchema } from 'src/app/config/config.types'

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      useFactory: async (config: ConfigService<ConfigEnvSchema>) => {
        return {
          secret: config.get<string>('SECURITY_JWT_SECRET'),
          signOptions: {
            issuer: config.get<string>('SECURITY_JWT_ISSUER'),
            expiresIn: config.get<string>('SECURITY_JWT_EXPIRES_IN')
          }
        }
      },
      inject: [ConfigService]
    })
  ]
})
export class CustomJwtModule {}
