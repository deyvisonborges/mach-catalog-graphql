import { Module } from '@nestjs/common'
import { simpleProductProviders } from './simple-product.providers'
import { SimpleProductResolver } from './graphql/simple-product.resolver'

@Module({
  providers: [SimpleProductResolver, ...simpleProductProviders]
})
export class SimpleProductModule {}
