import { Module } from '@nestjs/common'
import { simpleProductProviders } from './simple-product.providers'
import { SimpleProductResolver } from './graphql/simple-product.resolver'
import { PrismaModule } from 'src/app/database/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [SimpleProductResolver, ...simpleProductProviders]
})
export class SimpleProductModule {}
