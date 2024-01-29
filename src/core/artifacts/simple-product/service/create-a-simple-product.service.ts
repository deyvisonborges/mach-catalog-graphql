import { BaseServiceContract } from 'src/core/common/base/service.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from '../repository/simple-product.repository.contract'
import { HttpException, HttpStatus } from '@nestjs/common'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'

export class CreateASimpleProductService
  implements
    BaseServiceContract<SimpleProductModelProps, SimpleProductModelProps>
{
  constructor(
    private readonly repository: SimpleProductRepositoryContract,
    private readonly productsRepository: ProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract
  ) {}

  async execute(
    input: SimpleProductModelProps
  ): Promise<SimpleProductModelProps> {
    const exists = await this.productsRepository.findProductBySku(
      input.product.sku
    )

    if (exists)
      throw new HttpException(
        { message: 'Product already exists' },
        HttpStatus.BAD_REQUEST
      )

    const productType = await this.productTypeRepository.findByName(
      input.product.productType.name
    )

    if (!productType)
      throw new HttpException(
        { message: 'Invalid product type' },
        HttpStatus.BAD_REQUEST
      )

    const product = await this.productsRepository.createOne({
      ...input.product,
      productType: productType
    })

    return await this.repository.createOne({ ...input, ...product })
  }
}
