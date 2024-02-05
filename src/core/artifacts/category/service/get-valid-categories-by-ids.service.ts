import { BaseServiceContract } from 'src/core/common/base/service.base'
import { CategoryModelProps } from '../category.model'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

type Input = { categoriesIds: string[] }
type Output = CategoryModelProps

export class GetValidCategoriesByIdsService
  implements BaseServiceContract<Input, Output[]>
{
  constructor(private readonly repo: CategoryRepositoryContract) {}

  async execute(input: Input): Promise<Output[]> {
    const ids = input.categoriesIds
    const categories = await this.repo.getValidCategoriesByIds(ids)
    return categories.filter(role => role !== null)
  }
}
