import { ProductInMemoryRepository } from 'src/core/artifacts/product/repository/product.in-memory.repository'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { SimpleProductInMemoryRepository } from 'src/core/artifacts/simple-product/repository/simple-product.in-memory.repository'
import { VirtualProductInMemoryRepository } from 'src/core/artifacts/virtual-product/repository/virtual-product.in-memory.repository'

const repositories = [
  {
    provide: ProductInMemoryRepository,
    useFactory: () => new ProductInMemoryRepository()
  },
  {
    provide: SimpleProductInMemoryRepository,
    useFactory: () => new SimpleProductInMemoryRepository()
  },
  {
    provide: VirtualProductInMemoryRepository,
    useFactory: () => new VirtualProductInMemoryRepository()
  }
]

const services = [
  {
    provide: FindAllProductsService,
    useFactory: (
      productRepository: ProductInMemoryRepository,
      simpleProductRepository: SimpleProductInMemoryRepository,
      virtualProductRepository: VirtualProductInMemoryRepository
    ) => {
      return new FindAllProductsService(
        productRepository,
        simpleProductRepository,
        virtualProductRepository
      )
    },
    inject: [
      ProductInMemoryRepository,
      SimpleProductInMemoryRepository,
      VirtualProductInMemoryRepository
    ]
  }
]

export const productProviders = [...repositories, ...services]
