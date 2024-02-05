import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { CategoryModelProps } from '../category.model'
import { CategoryRepositoryContract } from './category.repository.contract'

export class CategoryInMemoryRepository
  extends InMemoryBaseRepository<CategoryModelProps>
  implements CategoryRepositoryContract
{
  async getValidCategoriesByIds(
    ids: string[]
  ): Promise<[] | CategoryModelProps[]> {
    return this.items.filter(category => ids.includes(category.id))
  }
}
