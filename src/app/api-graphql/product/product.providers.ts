import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductPrismaRepository } from './product.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { SimpleProductPrismaRepository } from '../simple-product/simple-product.prisma.repository'
import { ProductTypePrismaRepository } from '../product-type/product-type.prisma.repository'
import { VirtualProductPrismaRepository } from '../virtual-product/virtual-product.prisma.repository'
import { ProductCategoryPrismaRepository } from 'src/core/common/repositories/product-category/product-category.prisma.repository'
import { AssignCategoriesToProductService } from 'src/core/artifacts/category/service/assign-categories-to-product.service'
import { FindProductByIdService } from 'src/core/artifacts/product/service/find-product-by-id.service'
import { GetValidCategoriesByIdsService } from 'src/core/artifacts/category/service/get-valid-categories-by-ids.service'
import { CategoryPrismaRepository } from '../category/category.prisma.repository'

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
  },
  {
    provide: ProductCategoryPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new ProductCategoryPrismaRepository(prismaService),
    inject: [PrismaService]
  },
  {
    provide: CategoryPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new CategoryPrismaRepository(prismaService),
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
    provide: FindAllProductsService,
    useFactory: (
      productRepository: ProductPrismaRepository,
      simpleProductRepository: SimpleProductPrismaRepository,
      virtualProductRepository: VirtualProductPrismaRepository,
      productTypeRepository: ProductTypePrismaRepository,
      productCategoryRepository: ProductCategoryPrismaRepository
    ) => {
      return new FindAllProductsService(
        productRepository,
        simpleProductRepository,
        virtualProductRepository,
        productTypeRepository,
        productCategoryRepository
      )
    },
    inject: [
      ProductPrismaRepository,
      SimpleProductPrismaRepository,
      VirtualProductPrismaRepository,
      ProductTypePrismaRepository,
      ProductCategoryPrismaRepository
    ]
  },
  {
    provide: FindProductByIdService,
    useFactory: (productRepository: ProductPrismaRepository) =>
      new FindProductByIdService(productRepository),
    inject: [ProductPrismaRepository]
  },
  {
    provide: GetValidCategoriesByIdsService,
    useFactory: (categoryRepository: CategoryPrismaRepository) =>
      new GetValidCategoriesByIdsService(categoryRepository),
    inject: [CategoryPrismaRepository]
  },
  {
    provide: AssignCategoriesToProductService,
    useFactory: (
      findProductByIdService: FindProductByIdService,
      getValidCategoriesByIdsService: GetValidCategoriesByIdsService,
      categoryRepository: CategoryPrismaRepository,
      productCategoryRepository: ProductCategoryPrismaRepository
    ) =>
      new AssignCategoriesToProductService(
        findProductByIdService,
        getValidCategoriesByIdsService,
        categoryRepository,
        productCategoryRepository
      ),
    inject: [
      FindProductByIdService,
      GetValidCategoriesByIdsService,
      CategoryPrismaRepository,
      ProductCategoryPrismaRepository
    ]
  }
]

export const productProviders = [...repositories, ...services]
