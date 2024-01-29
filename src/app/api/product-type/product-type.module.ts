import { Module } from '@nestjs/common'
import { productTypeProviders } from './product-type.providers'
import { ProductTypeResolver } from './graphql/product-type.resolver'
import { PrismaModule } from 'src/app/database/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [ProductTypeResolver, ...productTypeProviders]
})
export class ProductTypeModule {}
