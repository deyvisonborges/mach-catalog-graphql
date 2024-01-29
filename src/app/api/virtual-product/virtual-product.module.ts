import { Module } from '@nestjs/common'
import { VirtualProductResolver } from './graphql/virtual-product.resolver'
import { virtualProductProviders } from './virtual-product.providers'

@Module({
  providers: [VirtualProductResolver, ...virtualProductProviders]
})
export class VirtualProductModule {}
