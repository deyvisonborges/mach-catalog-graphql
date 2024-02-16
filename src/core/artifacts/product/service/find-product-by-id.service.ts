import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common'
import { BaseServiceContract } from '../../../common/base/service.base'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { ProductModelPropsAdapter } from '../product.model.adapter'
import { ProductCategoryRepositoryContract } from 'src/core/common/repositories/product-category/product-category.repository.contract'
import { CategoryModelProps } from '../../category/category.model'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'

type Input = Required<Pick<ProductModelPropsAdapter, `id`>>
type Output = ProductModelPropsAdapter

export class FindProductByIdService
  implements BaseServiceContract<Input, Output>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract,
    private readonly productCategoryRepository: ProductCategoryRepositoryContract
  ) {}

  async execute(input: Input): Promise<Output> {
    const product = await this.productRepository.findById(input.id)

    if (!product)
      throw new HttpException(
        `Not found product with id ${input.id}`,
        HttpStatus.BAD_REQUEST
      )

    const [categoriesFromProduct, typeFromProduct] = await Promise.all([
      this.productCategoryRepository.findCategoriesByProductId(product.id),
      this.productTypeRepository.findById(product.productTypeId)
    ])

    if (!product)
      throw new NotFoundException(`Not found product with uuid: ` + input.id)
    return {
      ...product,
      categories: this.getCategories(categoriesFromProduct),
      type: typeFromProduct.name
    }
  }

  private getCategories(categories: CategoryModelProps[]) {
    if (categories.length <= 0) return []
    return categories
  }
}
