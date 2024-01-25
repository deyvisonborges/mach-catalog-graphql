import { Module } from '@nestjs/common'
import { SimpleProductResolver } from './simple-product.resolver'
import { ProductCreator } from 'src/core/artifacts/product/product.creator'
import { ProductInMemoryRepository } from 'src/core/artifacts/product/repositories/product.in-memory.repository'
import { CreateSimpleProductService } from 'src/core/artifacts/product/variants/virtual-product/service/create-simple-product.service'

@Module({
  providers: [
    SimpleProductResolver,
    {
      provide: ProductCreator,
      useFactory: () => new ProductCreator()
    },
    {
      provide: ProductInMemoryRepository,
      useFactory: () => new ProductInMemoryRepository()
    },
    {
      provide: CreateSimpleProductService,
      useFactory: (
        factory: ProductCreator,
        repository: ProductInMemoryRepository
      ) => {
        return new CreateSimpleProductService(factory, repository)
      },
      inject: [ProductCreator, ProductInMemoryRepository]
    }
  ]
})
export class SimpleProductModule {}
