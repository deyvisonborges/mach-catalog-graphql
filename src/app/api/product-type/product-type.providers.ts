import { ProductTypeInMemoryRepository } from 'src/core/artifacts/product-type/repository/product-type.in-memory.repository'
import { CreateProductTypeService } from 'src/core/artifacts/product-type/service/create-product-type.service'

const repositories = [
  {
    provide: ProductTypeInMemoryRepository,
    useFactory: () => new ProductTypeInMemoryRepository()
  }
]

const services = [
  {
    provide: CreateProductTypeService,
    useFactory: (repository: ProductTypeInMemoryRepository) =>
      new CreateProductTypeService(repository),
    inject: [ProductTypeInMemoryRepository]
  }
]

export const productTypeProviders = [...repositories, ...services]
