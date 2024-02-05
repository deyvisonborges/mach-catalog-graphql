import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { CategoryModelProps } from '../category.model'

export type CategoryRepositoryContract = {
  getValidCategoriesByIds(ids: string[]): Promise<CategoryModelProps[] | []>
} & BaseRepositoryContract<CategoryModelProps>
