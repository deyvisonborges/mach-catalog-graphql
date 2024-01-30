import { BaseServiceContract } from 'src/core/common/base/service.base'
import { VirtualProductModelProps } from '../virtual-product.model'
import { VirtualProductRepositoryContract } from '../repository/virtual-product.repository.contract'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'

type Output = VirtualProductModelProps[]

export class FindAllVirtualProductsService
  implements BaseServiceContract<void, Output>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly repository: VirtualProductRepositoryContract
  ) {}

  async execute(): Promise<Output> {
    const virtualProducts = await this.repository.findAll()
    const products = await this.productRepository.findAll()

    const output: Output = virtualProducts.map(virtual => {
      const correspondingProduct = products.find(
        product => product.id === virtual.productId
      )
      if (!correspondingProduct) {
        throw new Error(
          `Corresponding product not found for SimpleProduct with productId: ${virtual.productId}`
        )
      }
      return {
        ...correspondingProduct,
        ...virtual
      }
    })

    return output
  }
}
