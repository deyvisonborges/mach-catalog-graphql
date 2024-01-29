import { ProductTypeInMemoryRepository } from 'src/core/artifacts/product-type/repository/product-type.in-memory.repository'
import { ProductInMemoryRepository } from 'src/core/artifacts/product/repository/product.in-memory.repository'
import { SimpleProductInMemoryRepository } from 'src/core/artifacts/simple-product/repository/simple-product.in-memory.repository'
import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'

const repositories = [
  {
    provide: SimpleProductInMemoryRepository,
    useFactory: () => new SimpleProductInMemoryRepository()
  },
  {
    provide: ProductInMemoryRepository,
    useFactory: () => new ProductInMemoryRepository()
  },
  {
    provide: ProductTypeInMemoryRepository,
    useFactory: () => new ProductTypeInMemoryRepository()
  }
]

const services = [
  {
    provide: CreateASimpleProductService,
    useFactory: (
      repository: SimpleProductInMemoryRepository,
      productRepository: ProductInMemoryRepository,
      productTypeReposutory: ProductTypeInMemoryRepository
    ) =>
      new CreateASimpleProductService(
        repository,
        productRepository,
        productTypeReposutory
      ),
    inject: [
      SimpleProductInMemoryRepository,
      ProductInMemoryRepository,
      ProductTypeInMemoryRepository
    ]
  },
  {
    provide: FindAllSimpleProductsService,
    useFactory: (repository: SimpleProductInMemoryRepository) =>
      new FindAllSimpleProductsService(repository),
    inject: [SimpleProductInMemoryRepository]
  }
]

export const simpleProductProviders = [...repositories, ...services]
