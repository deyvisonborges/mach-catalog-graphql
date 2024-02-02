import { NotFoundException } from '@nestjs/common'
import { CategoryModelProps } from '../category.model'
import { BaseServiceContract } from '../../../../core/common/base/service.base'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'
import { UUID } from '../../../../core/common/valueobjects/uuid.vo'

type Input = Required<Pick<CategoryModelProps, `id`>>
type Output = void

export class DeleteCategoryService
  implements BaseServiceContract<Input, Output>
{
  constructor(private readonly categoryRepo: CategoryRepositoryContract) {}

  async execute(input: Input): Promise<void> {
    const uuid = new UUID(input.id)
    const category = await this.categoryRepo.findById(uuid.toString())

    if (category === null) {
      throw new NotFoundException(
        `Not found category with uuid ${uuid.toString()}`
      )
    }

    await this.categoryRepo.delete(uuid.toString())
  }
}
