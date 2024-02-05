import { NotFoundException } from '@nestjs/common'
import { BaseServiceContract } from '../../../common/base/service.base'
import { UUID } from '../../../common/valueobjects/uuid.vo'
import { ProductModelProps } from '../product.model'
import { ProductRepositoryContract } from '../repository/product.repository.contract'

type Input = Required<Pick<ProductModelProps, `id`>>
type Output = ProductModelProps

export class FindProductByIdService
  implements BaseServiceContract<Input, Output>
{
  constructor(private productRepository: ProductRepositoryContract) {}

  async execute(input: Input): Promise<Output> {
    const product = await this.productRepository.findById(input.id)

    if (!product)
      throw new NotFoundException(`Not found product with uuid: ` + input.id)
    return product
  }
}
