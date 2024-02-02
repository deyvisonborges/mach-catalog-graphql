import { BaseServiceContract } from 'src/core/common/base/service.base'
import { CategoryModelProps } from '../category.model'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

type Input = void
type Output = CategoryModelProps[]

export class FindAllCategoriesService
  implements BaseServiceContract<Input, Output>
{
  constructor(private categoryRepo: CategoryRepositoryContract) {}

  async execute(): Promise<Output> {
    return await this.categoryRepo.findAll()
  }
}
