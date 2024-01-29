import { ProductInMemoryRepository } from 'src/core/artifacts/product/repository/product.in-memory.repository'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { SimpleProductInMemoryRepository } from 'src/core/artifacts/simple-product/repository/simple-product.in-memory.repository'
import { VirtualProductInMemoryRepository } from 'src/core/artifacts/virtual-product/repository/virtual-product.in-memory.repository'
import { ProductPrismaRepository } from './product.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'

const repositories = [
  {
    provide: ProductPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new ProductPrismaRepository(prismaService),
    inject: [PrismaService]
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
      productRepository: ProductPrismaRepository,
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
      ProductPrismaRepository,
      SimpleProductInMemoryRepository,
      VirtualProductInMemoryRepository
    ]
  }
]

export const productProviders = [...repositories, ...services]
