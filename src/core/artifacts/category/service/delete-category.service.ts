import { NotFoundException } from '@nestjs/common'
import { CategoryModelProps } from '../category.model'
import { BaseServiceContract } from '../../../../core/common/base/service.base'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

type Input = Required<Pick<CategoryModelProps, `id`>>
type Output = void

export class DeleteCategoryService
  implements BaseServiceContract<Input, Output>
{
  constructor(private readonly categoryRepo: CategoryRepositoryContract) {}

  async execute(input: Input): Promise<void> {
    const category = await this.categoryRepo.findById(input.id)

    if (category === null)
      throw new NotFoundException(`Not found category with uuid ${input.id}`)

    await this.categoryRepo.delete(input.id)
  }
}
