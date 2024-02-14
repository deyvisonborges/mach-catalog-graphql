import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductTypeConstant } from '../product.constants'
import {
  VirtualProductModel,
  VirtualProductModelProps
} from '../../virtual-product/virtual-product.model'
import {
  SimpleProductModelProps,
  SimpleProductModel
} from '../../simple-product/simple-product.model'
import { SimpleProductRepositoryContract } from '../../simple-product/repository/simple-product.repository.contract'
import { ProductFactory } from '../product.factory'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { VirtualProductRepositoryContract } from '../../virtual-product/repository/virtual-product.repository.contract'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { HttpException, HttpStatus } from '@nestjs/common'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'

type Input = {
  type: ProductTypeConstant
  config:
    | Omit<VirtualProductModelProps, keyof BaseModelProps>
    | Omit<SimpleProductModelProps, keyof BaseModelProps>
}

export class CreateProductService implements BaseServiceContract<Input, null> {
  constructor(
    private readonly productFactory: ProductFactory, // Alterado para aceitar qualquer tipo de produto
    private readonly productRepository: ProductRepositoryContract,
    private readonly simpleProductRepository: SimpleProductRepositoryContract,
    private readonly virtualProductRepository: VirtualProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract
  ) {}

  async execute(input: Input): Promise<null> {
    const product = this.productFactory.createProduct(input.type, input.config)

    // verifica se o produto ja existe através do sku informado
    const hasProductWithSku = await this.productRepository.findProductBySku(
      product.sku
    )

    if (hasProductWithSku)
      throw new HttpException(
        { message: 'Product already exists' },
        HttpStatus.BAD_REQUEST
      )

    // valida se o tipo do produto informado, é valido
    const hasProductType = await this.productTypeRepository.findByName(
      input.type
    )

    // se o tipo de produto informado, não for válido, retorna um erro
    if (!hasProductType)
      throw new HttpException(
        { message: 'Invalid product type' },
        HttpStatus.BAD_REQUEST
      )

    // cria o produto de acordo com o tipo informado
    if (input.type === 'simple' && product instanceof SimpleProductModel) {
      await this.simpleProductRepository.createOne({
        material: product.material,
        productId: product.id,
        size: product.size,
        weight: product.weight
      })
      return null // temporario, mudar para o retorno do produto criado
    }

    if (input.type === 'virtual' && product instanceof VirtualProductModel) {
      await this.virtualProductRepository.createOne({
        downloadLink: product.downloadLink,
        productId: product.id
      })
      return null // temporario, mudar para o retorno do produto criado
    }

    throw new Error('Invalid product type or product instance')
  }
}
