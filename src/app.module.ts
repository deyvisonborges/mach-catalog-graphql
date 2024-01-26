import { Module } from '@nestjs/common'
import { AppResolver } from './app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from './app/config/config.module'
import { ApiModule } from './app/api/api.module'
import { IntegrationsModule } from './integrations/integrations.module'
import path from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    }),
    ConfigModule.forRoot(),
    ApiModule,
    IntegrationsModule
  ],
  providers: [AppResolver]
})
export class AppModule {}
