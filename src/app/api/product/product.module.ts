import { Module } from '@nestjs/common'
import { SimpleProductModule } from './simple-product/simple-product.module'
import { ProductResolver } from './product.resolver'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductInMemoryRepository } from 'src/core/artifacts/product/repositories/product.in-memory.repository'

@Module({
  imports: [SimpleProductModule],
  providers: [
    ProductResolver,
    {
      provide: ProductInMemoryRepository,
      useFactory: () => new ProductInMemoryRepository()
    },
    {
      provide: FindAllProductsService,
      useFactory: (productRepository: ProductInMemoryRepository) => {
        return new FindAllProductsService(productRepository)
      },
      inject: [ProductInMemoryRepository]
    }
  ]
})
export class ProductModule {}
