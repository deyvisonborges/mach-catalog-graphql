import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from './app/config/config.module'
import { ApiGraphqlModule } from './app/api-graphql/api-graphql.module'
import { IntegrationsModule } from './app/integrations/integrations.module'
import { DatabaseModule } from './app/database/database.module'
import { ApiRestModule } from './app/api-rest/api-rest.module'
import { RabbitmqModule } from './integrations/rabbitmq/rabbitmq.module'
import path from 'path'
import { CustomJwtModule } from './external/jwt.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    }),
    ConfigModule.forRoot(),
    CustomJwtModule,
    EventEmitterModule.forRoot({
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10
    }),
    DatabaseModule,
    ApiGraphqlModule,
    ApiRestModule,
    IntegrationsModule
    // RabbitmqModule
  ]
})
export class AppModule {}
