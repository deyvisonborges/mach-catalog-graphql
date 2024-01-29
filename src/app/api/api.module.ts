import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module'
import { SimpleProductModule } from './simple-product/simple-product.module'
import { VirtualProductModule } from './virtual-product/virtual-product.module'
import { ProductTypeModule } from './product-type/product-type.module'

@Module({
  imports: [
    ProductModule,
    SimpleProductModule,
    VirtualProductModule,
    ProductTypeModule
  ]
})
export class ApiModule {}
