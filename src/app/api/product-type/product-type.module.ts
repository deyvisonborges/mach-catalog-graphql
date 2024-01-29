import { Module } from '@nestjs/common'
import { productTypeProviders } from './product-type.providers'
import { ProductTypeResolver } from './graphql/product-type.resolver'

@Module({
  providers: [ProductTypeResolver, ...productTypeProviders]
})
export class ProductTypeModule {}
