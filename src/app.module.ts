import { Module } from '@nestjs/common'
import { AppResolver } from './app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from './app/config/config.module'
import { ApiGraphqlModule } from './app/api-graphql/api-graphql.module'
import { IntegrationsModule } from './app/integrations/integrations.module'
import { DatabaseModule } from './app/database/database.module'
import { ApiRestModule } from './app/api-rest/api-rest.module'
import path from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    }),
    ConfigModule.forRoot(),
    DatabaseModule,
    ApiGraphqlModule,
    ApiRestModule,
    IntegrationsModule
  ],
  providers: [AppResolver]
})
export class AppModule {}
