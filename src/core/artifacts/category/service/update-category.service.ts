import { BaseServiceContract } from 'src/core/common/base/service.base'
import { CategoryModel, CategoryModelProps } from '../category.model'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

export type UpdateCategoryServiceInput = Partial<
  Omit<CategoryModelProps, keyof BaseModelProps>
> & {
  id: string
}

type Output = void

export class UpdateCategoryService
  implements BaseServiceContract<UpdateCategoryServiceInput, Output>
{
  constructor(
    private readonly categoryRepository: CategoryRepositoryContract
  ) {}

  async execute(input: UpdateCategoryServiceInput): Promise<Output> {
    const category = new CategoryModel(
      await this.categoryRepository.findById(input.id)
    )

    if (!category) {
      throw new Error(`Not found category with id: ` + input.id)
    }

    input.name && category.changeName(input.name)
    input.description && category.changeDescription(input.description)

    await this.categoryRepository.update(category)
  }
}
