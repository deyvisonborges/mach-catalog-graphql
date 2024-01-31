import { CreateProductTypeService } from 'src/core/artifacts/product-type/service/create-product-type.service'
import { ProductTypePrismaRepository } from './product-type.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'

const repositories = [
  {
    provide: ProductTypePrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new ProductTypePrismaRepository(prismaService),
    inject: [PrismaService]
  }
]

const services = [
  {
    provide: CreateProductTypeService,
    useFactory: (repository: ProductTypePrismaRepository) =>
      new CreateProductTypeService(repository),
    inject: [ProductTypePrismaRepository]
  }
]

export const productTypeProviders = [...repositories, ...services]
