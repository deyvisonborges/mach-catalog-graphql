import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { VirtualProductInMemoryRepository } from 'src/core/artifacts/virtual-product/repository/virtual-product.in-memory.repository'
import { ProductPrismaRepository } from './product.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { SimpleProductPrismaRepository } from '../simple-product/simple-product.prisma.repository'
import { ProductTypePrismaRepository } from '../product-type/product-type.prisma.repository'
import { VirtualProductPrismaRepository } from '../virtual-product/virtual-product.prisma.repository'

const repositories = [
  {
    provide: ProductPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new ProductPrismaRepository(prismaService),
    inject: [PrismaService]
  },
  {
    provide: SimpleProductPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new SimpleProductPrismaRepository(prismaService),
    inject: [PrismaService]
  },
  {
    provide: VirtualProductPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new VirtualProductPrismaRepository(prismaService),
    inject: [PrismaService]
  },
  {
    provide: ProductTypePrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new ProductTypePrismaRepository(prismaService),
    inject: [PrismaService]
  }
]

const services = [
  {
    provide: FindAllProductsService,
    useFactory: (
      productRepository: ProductPrismaRepository,
      simpleProductRepository: SimpleProductPrismaRepository,
      virtualProductRepository: VirtualProductPrismaRepository,
      productTypeRepository: ProductTypePrismaRepository
    ) => {
      return new FindAllProductsService(
        productRepository,
        simpleProductRepository,
        virtualProductRepository,
        productTypeRepository
      )
    },
    inject: [
      ProductPrismaRepository,
      SimpleProductPrismaRepository,
      VirtualProductPrismaRepository,
      ProductTypePrismaRepository
    ]
  }
]

export const productProviders = [...repositories, ...services]
