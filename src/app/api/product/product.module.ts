import { Module } from '@nestjs/common'
import { ProductResolver } from './graphql/product.resolver'
import { productProviders } from './product.providers'
import { PrismaModule } from 'src/app/database/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [ProductResolver, ...productProviders]
})
export class ProductModule {}
