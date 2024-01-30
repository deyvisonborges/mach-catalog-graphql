import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'
import { SimpleProductPrismaRepository } from './simple-product.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { ProductPrismaRepository } from '../product/product.prisma.repository'
import { ProductTypePrismaRepository } from '../product-type/product-type.prisma.repository'

const repositories = [
  {
    provide: SimpleProductPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new SimpleProductPrismaRepository(prismaService),
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
    provide: CreateASimpleProductService,
    useFactory: (
      repository: SimpleProductPrismaRepository,
      productRepository: ProductPrismaRepository,
      productTypeReposutory: ProductTypePrismaRepository
    ) =>
      new CreateASimpleProductService(
        repository,
        productRepository,
        productTypeReposutory
      ),
    inject: [
      SimpleProductPrismaRepository,
      ProductPrismaRepository,
      ProductTypePrismaRepository
    ]
  },
  {
    provide: FindAllSimpleProductsService,
    useFactory: (repository: SimpleProductPrismaRepository) =>
      new FindAllSimpleProductsService(repository),
    inject: [SimpleProductPrismaRepository]
  }
]

export const simpleProductProviders = [...repositories, ...services]
