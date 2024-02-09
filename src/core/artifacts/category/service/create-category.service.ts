import { HttpException, HttpStatus } from '@nestjs/common'
import { BaseModelProps } from '../../../../core/common/base/model.base'
import { BaseServiceContract } from '../../../../core/common/base/service.base'
import { CategoryModel, CategoryModelProps } from '../category.model'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

export type CreateCategoryInput = Omit<CategoryModelProps, keyof BaseModelProps>
export type CreateCategoryOutput = CategoryModelProps

export class CreateCategoryService
  implements BaseServiceContract<CreateCategoryInput, CreateCategoryOutput>
{
  constructor(private readonly categoryRepo: CategoryRepositoryContract) {}

  async execute(input: CreateCategoryInput): Promise<CreateCategoryOutput> {
    try {
      const entity = CategoryModel.create({ ...input })
      return await this.categoryRepo.createOne(entity)
    } catch (error) {
      throw new HttpException('Fail to create category', HttpStatus.BAD_REQUEST)
    }
  }
}
