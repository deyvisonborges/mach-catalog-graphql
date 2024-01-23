import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductVariantType } from '../product.creator.contract'
import { ProductCreator } from '../product.creator'
import { ProductRepositoryContract } from '../repositories/product.repository.contract'

export type CreateProductInput = ProductVariantType

export class CreateProductService
  implements BaseServiceContract<CreateProductInput, ProductVariantType>
{
  constructor(
    private readonly productCreator: ProductCreator,
    private readonly repository: ProductRepositoryContract
  ) {}

  async execute(input: CreateProductInput): Promise<ProductVariantType> {
    if (!input.images || input.images.length === 0)
      throw new Error('Bad request', { cause: 'Inform at least 1 product' })

    const createdProduct = this.productCreator.createProduct(input)

    return await this.repository.createOne(createdProduct)
  }
}
