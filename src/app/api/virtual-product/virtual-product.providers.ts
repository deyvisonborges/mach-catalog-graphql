import { CreateAVirtualProductService } from 'src/core/artifacts/virtual-product/service/create-a-virtual-product.service'
import { VirtualProductPrismaRepository } from './virtual-product.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { ProductPrismaRepository } from '../product/product.prisma.repository'
import { ProductTypePrismaRepository } from '../product-type/product-type.prisma.repository'

const repositories = [
  {
    provide: VirtualProductPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new VirtualProductPrismaRepository(prismaService),
    inject: [PrismaService]
  },
  {
    provide: ProductPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new ProductPrismaRepository(prismaService),
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
    provide: CreateAVirtualProductService,
    useFactory: (
      virtualProductRepository: VirtualProductPrismaRepository,
      productRepository: ProductPrismaRepository,
      productTypeRepository: ProductTypePrismaRepository
    ) => {
      return new CreateAVirtualProductService(
        virtualProductRepository,
        productRepository,
        productTypeRepository
      )
    },
    inject: [
      VirtualProductPrismaRepository,
      ProductPrismaRepository,
      ProductTypePrismaRepository
    ]
  }
]

export const virtualProductProviders = [...repositories, ...services]
