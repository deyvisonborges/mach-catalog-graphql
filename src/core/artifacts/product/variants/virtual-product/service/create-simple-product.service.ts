import { BaseServiceContract } from 'src/core/common/base/service.base'
import { BaseModelProps } from '../../../../../../core/common/base/model.base'
import { SimpleProductProps } from '../simple-product.model'
import { ProductRepositoryContract } from '../../../repositories/product.repository.contract'
import { ProductCreator } from '../../../product.creator'
import { HttpException, HttpStatus } from '@nestjs/common'

export type CreateSimpleProductInput = Omit<
  SimpleProductProps,
  keyof BaseModelProps
>

export class CreateSimpleProductService
  implements BaseServiceContract<CreateSimpleProductInput, SimpleProductProps>
{
  constructor(
    private readonly productFactory: ProductCreator,
    private readonly repository: ProductRepositoryContract
  ) {}

  async execute(input: CreateSimpleProductInput): Promise<SimpleProductProps> {
    const simpleProduct = this.productFactory.createProduct({ ...input })

    const existsBySku = await this.repository.findProductBySku(
      simpleProduct.sku
    )

    if (existsBySku)
      throw new HttpException('Product already exists', HttpStatus.BAD_REQUEST)

    await this.repository.createOne(simpleProduct)
    return simpleProduct as SimpleProductProps
  }
}
