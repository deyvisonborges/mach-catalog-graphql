import { DeleteCategoryService } from 'src/core/artifacts/category/service/delete-category.service'
import { CategoryInMemoryRepository } from '../../../core/artifacts/category/repository/category.in-memory.repository'
import { CreateCategoryService } from '../../../core/artifacts/category/service/create-category.service'
import { RetrieveASingleCategory } from 'src/core/artifacts/category/service/find-category-by-id.service'
import { FindAllCategoriesService } from 'src/core/artifacts/category/service/find-all-categories.service'

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
  },
  {
    provide: DeleteCategoryService,
    useFactory: (categoryRepo: CategoryInMemoryRepository) =>
      new DeleteCategoryService(categoryRepo),
    inject: [CategoryInMemoryRepository]
  },
  {
    provide: RetrieveASingleCategory,
    useFactory: (categoryRepo: CategoryInMemoryRepository) =>
      new RetrieveASingleCategory(categoryRepo),
    inject: [CategoryInMemoryRepository]
  },
  {
    provide: FindAllCategoriesService,
    useFactory: (categoryRepo: CategoryInMemoryRepository) =>
      new FindAllCategoriesService(categoryRepo),
    inject: [CategoryInMemoryRepository]
  }
]

export const categoryProviders = [...repositories, ...services]
