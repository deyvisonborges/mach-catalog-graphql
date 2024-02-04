import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductCategoryRepositoryType } from './product-category.repository.type'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'

export type ProductCategoryRepositoryContract = {
  findCategoriesByIds(
    categoriesIds: string[]
  ): Promise<ProductCategoryRepositoryType[] | []>
  findCategoriesByProductId(productId: string): Promise<CategoryModelProps[]>
} & BaseRepositoryContract<ProductCategoryRepositoryType>
