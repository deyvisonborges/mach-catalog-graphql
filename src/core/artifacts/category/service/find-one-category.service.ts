import { NotFoundException } from '@nestjs/common'
import { BaseServiceContract } from '../../../common/base/service.base'
import { UUID } from '../../../common/valueobjects/uuid.vo'
import { CategoryModelProps } from '../category.model'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

type Input = Required<Pick<CategoryModelProps, `id`>>
type Output = CategoryModelProps

export class FindOneCategoryService
  implements BaseServiceContract<Input, Output>
{
  constructor(private categoryRepository: CategoryRepositoryContract) {}

  async execute(input: Input): Promise<Output> {
    const uuid = new UUID(input.id)
    const category = await this.categoryRepository.findById(uuid.toString())

    if (!category)
      throw new NotFoundException(`Not found category with uuid: ` + input.id)
    return category
  }
}
