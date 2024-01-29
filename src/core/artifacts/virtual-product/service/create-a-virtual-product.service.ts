import { BaseServiceContract } from 'src/core/common/base/service.base'
import { VirtualProductModelProps } from '../virtual-product.model'
import { VirtualProductRepositoryContract } from '../repository/virtual-product.repository.contract'
import { HttpException, HttpStatus } from '@nestjs/common'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'

export class CreateAVirtualProductService
  implements
    BaseServiceContract<VirtualProductModelProps, VirtualProductModelProps>
{
  constructor(
    private readonly repository: VirtualProductRepositoryContract,
    private readonly productsRepository: ProductRepositoryContract
  ) {}

  async execute(
    input: VirtualProductModelProps
  ): Promise<VirtualProductModelProps> {
    const exists = await this.productsRepository.findProductBySku(
      input.product.sku
    )

    if (exists)
      throw new HttpException(
        { message: 'Product already exists' },
        HttpStatus.BAD_REQUEST
      )

    const product = await this.productsRepository.createOne({
      ...input.product
    })

    return await this.repository.createOne({ ...input, ...product })
  }
}
