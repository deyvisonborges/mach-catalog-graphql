import { Module } from '@nestjs/common'
import { SimpleProductModule } from './simple-product/simple-product.module'

@Module({
  imports: [SimpleProductModule]
})
export class ProductModule {}
