import { DeleteCategoryService } from 'src/core/artifacts/category/service/delete-category.service'
import { CreateCategoryService } from '../../../core/artifacts/category/service/create-category.service'
import { FindAllCategoriesService } from 'src/core/artifacts/category/service/find-all-categories.service'
import { FindOneCategoryService } from 'src/core/artifacts/category/service/find-one-category.service'
import { CategoryPrismaRepository } from './category.prisma.repository'
import { PrismaService } from 'src/app/database/prisma/prisma.service'

const repositories = [
  {
    provide: CategoryPrismaRepository,
    useFactory: (prismaService: PrismaService) =>
      new CategoryPrismaRepository(prismaService),
    inject: [PrismaService]
  }
]

const services = [
  {
    provide: CreateCategoryService,
    useFactory: (categoryRepo: CategoryPrismaRepository) =>
      new CreateCategoryService(categoryRepo),
    inject: [CategoryPrismaRepository]
  },
  {
    provide: DeleteCategoryService,
    useFactory: (categoryRepo: CategoryPrismaRepository) =>
      new DeleteCategoryService(categoryRepo),
    inject: [CategoryPrismaRepository]
  },
  {
    provide: FindOneCategoryService,
    useFactory: (categoryRepo: CategoryPrismaRepository) =>
      new FindOneCategoryService(categoryRepo),
    inject: [CategoryPrismaRepository]
  },
  {
    provide: FindAllCategoriesService,
    useFactory: (categoryRepo: CategoryPrismaRepository) =>
      new FindAllCategoriesService(categoryRepo),
    inject: [CategoryPrismaRepository]
  }
]

export const categoryProviders = [...repositories, ...services]
