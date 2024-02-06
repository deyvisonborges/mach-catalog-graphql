import { BaseServiceContract } from 'src/core/common/base/service.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from '../repository/simple-product.repository.contract'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { HttpException, HttpStatus } from '@nestjs/common'
import { SimpleProductModelPropsAdapter } from '../simple-product.model.adapter'

export type CreateASimpleProductServiceInput = Omit<
  SimpleProductModelProps,
  keyof BaseModelProps | 'categoriesIds'
>

export class CreateASimpleProductService
  implements
    BaseServiceContract<
      CreateASimpleProductServiceInput,
      SimpleProductModelPropsAdapter
    >
{
  constructor(
    private readonly repository: SimpleProductRepositoryContract,
    private readonly productsRepository: ProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract
  ) {}

  async execute(
    input: CreateASimpleProductServiceInput
  ): Promise<SimpleProductModelPropsAdapter> {
    // verifica se o produto ja existe através do sku informado
    const hasProductWithSku = await this.productsRepository.findProductBySku(
      input.sku
    )

    if (hasProductWithSku)
      throw new HttpException(
        { message: 'Product already exists' },
        HttpStatus.BAD_REQUEST
      )

    // valida se o tipo do produto informado, é valido
    const hasProductType = await this.productTypeRepository.findById(
      input.productTypeId
    )

    // se o tipo de produto informado, não for válido, retorna um erro
    if (!hasProductType)
      throw new HttpException(
        { message: 'Invalid product type' },
        HttpStatus.BAD_REQUEST
      )

    // cria o produto
    const product = await this.productsRepository.createOne({
      ...input
    })

    // cria o tipo de produto com os dados do produto criado
    const createdSimpleProduct = await this.repository.createOne({
      material: input.material,
      productId: product.id,
      size: input.size,
      weight: input.weight
    })

    return {
      ...product,
      ...createdSimpleProduct,
      productType: hasProductType,
      /**
       * Por padrão, não são vinculadas categorias ao produto
       * no processo de criação do mesmo
       */
      categories: []
    }
  }
}
