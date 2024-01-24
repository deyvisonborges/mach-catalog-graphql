import { Module } from '@nestjs/common'
import { SimpleProductService } from './simple-product.service'
import { SimpleProductResolver } from './simple-product.resolver'

@Module({
  providers: [SimpleProductResolver, SimpleProductService]
})
export class SimpleProductModule {}
