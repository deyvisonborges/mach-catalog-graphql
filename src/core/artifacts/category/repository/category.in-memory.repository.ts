import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { CategoryModelProps } from '../category.model'
import { CategoryRepositoryContract } from './category.repository.contract'

export class CategoryInMemoryRepository
  extends InMemoryBaseRepository<CategoryModelProps>
  implements CategoryRepositoryContract {}
