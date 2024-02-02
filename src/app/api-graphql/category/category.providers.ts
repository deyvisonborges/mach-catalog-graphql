import { CategoryInMemoryRepository } from '../../../core/artifacts/category/repository/category.in-memory.repository'
import { CreateCategoryService } from '../../../core/artifacts/category/service/create-category.service'

const repositories = [
  {
    provide: CategoryInMemoryRepository,
    useFactory: () => new CategoryInMemoryRepository()
  }
]

const services = [
  {
    provide: CreateCategoryService,
    useFactory: (categoryRepo: CategoryInMemoryRepository) =>
      new CreateCategoryService(categoryRepo),
    inject: [CategoryInMemoryRepository]
  }
]

export const categoryProviders = [...repositories, ...services]
