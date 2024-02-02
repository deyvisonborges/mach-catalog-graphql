import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { AppResolver } from './app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from './app/config/config.module'
import { ApiGraphqlModule } from './app/api-graphql/api-graphql.module'
import { IntegrationsModule } from './app/integrations/integrations.module'
import { DatabaseModule } from './app/database/database.module'
import { ApiRestModule } from './app/api-rest/api-rest.module'
import { RabbitmqModule } from './integrations/rabbitmq/rabbitmq.module'
import path from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    }),
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot({
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10
    }),
    DatabaseModule,
    ApiGraphqlModule,
    ApiRestModule,
    IntegrationsModule,
    RabbitmqModule
  ],
  providers: [AppResolver]
})
export class AppModule {}
