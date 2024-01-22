import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductVariantType } from '../product.creator.contract'
import { ProductRepositoryContract } from '../repositories/product.repository.contract'

type Input = Required<Pick<ProductVariantType, `id`>>
type Output = ProductVariantType

export class FindProductByIdService
  implements BaseServiceContract<Input, Output>
{
  constructor(private readonly productRepository: ProductRepositoryContract) {}

  async execute(input: Input): Promise<Output> {
    const product = await this.productRepository.findById(input.id)

    if (!product)
      throw new Error('Badquest Exception', {
        cause: `Not found product with id: ${input.id}`
      })

    return product
  }
}
