import { Module } from '@nestjs/common'
import { AppResolver } from './app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import path from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [AppResolver]
})
export class AppModule {}
