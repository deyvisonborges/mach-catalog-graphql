import { BaseServiceContract } from 'src/core/common/base/service.base'
import { VirtualProductModelProps } from '../virtual-product.model'
import { VirtualProductRepositoryContract } from '../repository/virtual-product.repository.contract'
import { HttpException, HttpStatus } from '@nestjs/common'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { VirtualProductModelPropsAdapter } from '../virtual-product.model.adapter'

export type CreateAVirtualProductServiceInput = Omit<
  VirtualProductModelProps,
  keyof BaseModelProps | 'categoriesIds'
>

export class CreateAVirtualProductService
  implements
    BaseServiceContract<
      CreateAVirtualProductServiceInput,
      VirtualProductModelPropsAdapter
    >
{
  constructor(
    private readonly repository: VirtualProductRepositoryContract,
    private readonly productsRepository: ProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract
  ) {}

  async execute(
    input: CreateAVirtualProductServiceInput
  ): Promise<VirtualProductModelPropsAdapter> {
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

    const createdVirtualProduct = await this.repository.createOne({
      downloadLink: input.downloadLink,
      productId: product.id
    })

    return {
      ...product,
      ...createdVirtualProduct,
      productType: hasProductType,
      /**
       * Por padrão, não são vinculadas categorias ao produto
       * no processo de criação do mesmo
       */
      categories: []
    }
  }
}
