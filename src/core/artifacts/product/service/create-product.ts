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

type Input = {
  type: ProductTypeConstant
  config:
    | Omit<VirtualProductModelProps, keyof BaseModelProps>
    | Omit<SimpleProductModelProps, keyof BaseModelProps>
}

export class CreateProductService implements BaseServiceContract<Input, null> {
  constructor(
    private readonly productFactory: ProductFactory, // Alterado para aceitar qualquer tipo de produto
    private readonly simpleProductRepository: SimpleProductRepositoryContract,
    private readonly virtualProductRepository: VirtualProductRepositoryContract
  ) {}

  async execute(input: Input): Promise<null> {
    const product = this.productFactory.createProduct(input.type, input.config)

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
