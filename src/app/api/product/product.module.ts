import { Module } from '@nestjs/common'
import { ProductResolver } from './product.resolver'
import { ProductCreator } from 'src/core/artifacts/product/product.creator'
import { ProductInMemoryRepository } from 'src/core/artifacts/product/repositories/product.in-memory.repository'
import { CreateProductService } from 'src/core/artifacts/product/service/create-product.service'
import { SimpleProductModule } from './simple-product/simple-product.module'

@Module({
  providers: [
    ProductResolver,
    {
      provide: ProductCreator,
      useFactory: () => {
        return new ProductCreator()
      }
    },
    {
      provide: ProductInMemoryRepository,
      useFactory: () => {
        return new ProductInMemoryRepository()
      }
    },
    {
      provide: CreateProductService,
      useFactory: (
        productCreator: ProductCreator,
        repository: ProductInMemoryRepository
      ) => {
        return new CreateProductService(productCreator, repository)
      },
      inject: [ProductCreator, ProductInMemoryRepository]
    }
  ],
  imports: [SimpleProductModule]
})
export class ProductModule {}
