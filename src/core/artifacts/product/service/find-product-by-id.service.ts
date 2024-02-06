import { NotFoundException } from '@nestjs/common'
import { BaseServiceContract } from '../../../common/base/service.base'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { ProductModelPropsAdapter } from '../product.model.adapter'
import { ProductCategoryRepositoryContract } from 'src/core/common/repositories/product-category/product-category.repository.contract'
import { CategoryModelProps } from '../../category/category.model'

type Input = Required<Pick<ProductModelPropsAdapter, `id`>>
type Output = ProductModelPropsAdapter

export class FindProductByIdService
  implements BaseServiceContract<Input, Output>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly productCategoryRepository: ProductCategoryRepositoryContract
  ) {}

  async execute(input: Input): Promise<Output> {
    const product = await this.productRepository.findById(input.id)
    const categoriesFromProduct =
      await this.productCategoryRepository.findCategoriesByProductId(product.id)

    if (!product)
      throw new NotFoundException(`Not found product with uuid: ` + input.id)
    return { categories: this.getCategories(categoriesFromProduct), ...product }
  }

  private getCategories(categories: CategoryModelProps[]) {
    if (categories.length <= 0) return []
    return categories
  }
}
