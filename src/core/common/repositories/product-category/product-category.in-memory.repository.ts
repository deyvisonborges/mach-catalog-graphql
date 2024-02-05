import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { InMemoryBaseRepository } from '../../base/in-memory-repository.base'
import { ProductCategoryRepositoryContract } from './product-category.repository.contract'
import { ProductCategoryRepositoryType } from './product-category.repository.type'

export class ProductCategoryInMemoryRepository
  extends InMemoryBaseRepository<ProductCategoryRepositoryType>
  implements ProductCategoryRepositoryContract
{
  assignCategoriesToProduct(
    productId: string,
    categoriesIds: string[]
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async findCategoriesByIds(
    categoriesIds: string[]
  ): Promise<ProductCategoryRepositoryType[]> {
    return this.items.filter(category => categoriesIds.includes(category.id))
  }

  async findCategoriesByProductId(
    productId: string
  ): Promise<CategoryModelProps[]> {
    const productCategories = this.items.filter(
      category => category.id === productId
    )
    return productCategories.map(category => ({
      id: category.id,
      name: category.name,
      description: category.description
    }))
  }
}
