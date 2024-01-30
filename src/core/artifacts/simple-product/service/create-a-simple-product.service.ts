import { BaseServiceContract } from 'src/core/common/base/service.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from '../repository/simple-product.repository.contract'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { HttpException, HttpStatus } from '@nestjs/common'

export type CreateASimpleProductServiceInput = Omit<
  SimpleProductModelProps,
  keyof BaseModelProps
>

export class CreateASimpleProductService
  implements
    BaseServiceContract<
      CreateASimpleProductServiceInput,
      SimpleProductModelProps
    >
{
  constructor(
    private readonly repository: SimpleProductRepositoryContract,
    private readonly productsRepository: ProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract
  ) {}

  async execute(
    input: CreateASimpleProductServiceInput
  ): Promise<SimpleProductModelProps> {
    const hasProductWithSku = await this.productsRepository.findProductBySku(
      input.sku
    )

    if (hasProductWithSku)
      throw new HttpException(
        { message: 'Product already exists' },
        HttpStatus.BAD_REQUEST
      )

    const hasProductType = await this.productTypeRepository.findById(
      input.productTypeId
    )

    if (!hasProductType)
      throw new HttpException(
        { message: 'Invalid product type' },
        HttpStatus.BAD_REQUEST
      )

    const product = await this.productsRepository.createOne({
      ...input
    })

    const createdSimpleProduct = await this.repository.createOne({
      material: input.material,
      productId: product.id,
      size: input.size,
      weight: input.weight
    })

    return {
      ...product,
      ...createdSimpleProduct
    }
  }
}
