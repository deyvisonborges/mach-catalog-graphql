import { ProductInMemoryRepository } from 'src/core/artifacts/product/repository/product.in-memory.repository'
import { VirtualProductInMemoryRepository } from 'src/core/artifacts/virtual-product/repository/virtual-product.in-memory.repository'
import { CreateAVirtualProductService } from 'src/core/artifacts/virtual-product/service/create-a-virtual-product.service'

const repositories = [
  {
    provide: VirtualProductInMemoryRepository,
    useFactory: () => new VirtualProductInMemoryRepository()
  },
  {
    provide: ProductInMemoryRepository,
    useFactory: () => new ProductInMemoryRepository()
  }
]

const services = [
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

export const virtualProductProviders = [...repositories, ...services]
