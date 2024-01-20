import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductVariantType } from '../product.creator.contract'
import { ProductCreator } from '../product.creator'
import { ProductRepositoryContract } from '../product.repository.contract'

export type CreateProductInput = ProductVariantType

export class CreateProductService
  implements BaseServiceContract<CreateProductInput, ProductVariantType>
{
  constructor(
    private readonly productCreator: ProductCreator,
    private readonly repository: ProductRepositoryContract
  ) {}

  async execute(input: CreateProductInput): Promise<ProductVariantType> {
    const createdProduct = this.productCreator.createProduct(input)
    await this.repository.createOne(createdProduct)
    return createdProduct
  }
}
