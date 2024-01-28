import { Module } from '@nestjs/common'
import { ProductResolver } from './product.resolver'
import { ProductInMemoryRepository } from 'src/core/artifacts/product/repository/product.in-memory.repository'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductTypeInMemoryRepository } from 'src/core/artifacts/product-type/repository/product-type.in-memory.repository'
import { SimpleProductInMemoryRepository } from 'src/core/artifacts/simple-product/repository/simple-product.in-memory.repository'
import { VirtualProductInMemoryRepository } from 'src/core/artifacts/virtual-product/repository/virtual-product.in-memory.repository'
import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'
import { CreateAVirtualProductService } from 'src/core/artifacts/virtual-product/service/create-a-virtual-product.service'

@Module({
  providers: [
    ProductResolver,
    {
      provide: ProductInMemoryRepository,
      useFactory: () => new ProductInMemoryRepository()
    },
    {
      provide: ProductTypeInMemoryRepository,
      useFactory: () => new ProductTypeInMemoryRepository()
    },
    {
      provide: SimpleProductInMemoryRepository,
      useFactory: () => new SimpleProductInMemoryRepository()
    },
    {
      provide: VirtualProductInMemoryRepository,
      useFactory: () => new VirtualProductInMemoryRepository()
    },
    {
      provide: FindAllProductsService,
      useFactory: (
        productRepository: ProductInMemoryRepository,
        productTypeReposutory: ProductTypeInMemoryRepository,
        simpleProductRepository: SimpleProductInMemoryRepository,
        virtualProductRepository: VirtualProductInMemoryRepository
      ) => {
        return new FindAllProductsService(
          productRepository,
          productTypeReposutory,
          simpleProductRepository,
          virtualProductRepository
        )
      },
      inject: [
        ProductInMemoryRepository,
        ProductTypeInMemoryRepository,
        SimpleProductInMemoryRepository,
        VirtualProductInMemoryRepository
      ]
    },

    {
      provide: CreateASimpleProductService,
      useFactory: (
        repository: SimpleProductInMemoryRepository,
        productRepository: ProductInMemoryRepository
      ) => new CreateASimpleProductService(repository, productRepository),
      inject: [SimpleProductInMemoryRepository, ProductInMemoryRepository]
    },
    {
      provide: FindAllSimpleProductsService,
      useFactory: (repository: SimpleProductInMemoryRepository) =>
        new FindAllSimpleProductsService(repository),
      inject: [SimpleProductInMemoryRepository]
    },
    {
      provide: CreateAVirtualProductService,
      useFactory: (
        virtualProductRepository: VirtualProductInMemoryRepository,
        productRepository: ProductInMemoryRepository
      ) => {
        return new CreateAVirtualProductService(
          virtualProductRepository,
          productRepository
        )
      },
      inject: [VirtualProductInMemoryRepository, ProductInMemoryRepository]
    }
  ]
})
export class ProductModule {}
