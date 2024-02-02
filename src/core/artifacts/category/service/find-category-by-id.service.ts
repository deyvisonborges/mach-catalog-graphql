import { NotFoundException } from '@nestjs/common'
import { CategoryModelProps } from '../category.model'
import { BaseServiceContract } from '../../../../core/common/base/service.base'
import { UUID } from '../../../../core/common/valueobjects/uuid.vo'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

type Input = Required<Pick<CategoryModelProps, `id`>>
type Output = CategoryModelProps

export class RetrieveASingleCategory
  implements BaseServiceContract<Input, Output>
{
  constructor(private categoryRepo: CategoryRepositoryContract) {}

  async execute(input: Input): Promise<Output> {
    const uuid = new UUID(input.id)
    const category = await this.categoryRepo.findById(uuid.toString())

    if (!category) {
      throw new NotFoundException(`Not found category with uuid: ` + input.id)
    }

    return category
  }
}
