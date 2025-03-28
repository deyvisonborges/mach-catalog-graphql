import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'
import { SimpleProductPrismaRepository } from './simple-product.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { ProductPrismaRepository } from '../product/product.prisma.repository'
import { ProductTypePrismaRepository } from '../product-type/product-type.prisma.repository'
import { ProductCategoryPrismaRepository } from 'src/core/common/repositories/product-category/product-category.prisma.repository'

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
  },
  {
    provide: ProductCategoryPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new ProductCategoryPrismaRepository(prismaService),
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
    useFactory: (
      simpleProductRepository: SimpleProductPrismaRepository,
      productRepository: ProductPrismaRepository,
      productCategoryRepository: ProductCategoryPrismaRepository,
      productTypeRepository: ProductTypePrismaRepository
    ) =>
      new FindAllSimpleProductsService(
        simpleProductRepository,
        productRepository,
        productCategoryRepository,
        productTypeRepository
      ),
    inject: [
      SimpleProductPrismaRepository,
      ProductPrismaRepository,
      ProductCategoryPrismaRepository,
      ProductTypePrismaRepository
    ]
  }
]

export const simpleProductProviders = [...repositories, ...services]
