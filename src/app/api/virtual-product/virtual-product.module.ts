import { Module } from '@nestjs/common'
import { VirtualProductResolver } from './graphql/virtual-product.resolver'
import { virtualProductProviders } from './virtual-product.providers'
import { PrismaModule } from 'src/app/database/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [VirtualProductResolver, ...virtualProductProviders]
})
export class VirtualProductModule {}
