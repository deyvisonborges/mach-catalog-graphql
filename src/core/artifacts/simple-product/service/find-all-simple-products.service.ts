import { BaseServiceContract } from 'src/core/common/base/service.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from '../repository/simple-product.repository.contract'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'

type Output = SimpleProductModelProps[]

export class FindAllSimpleProductsService
  implements BaseServiceContract<void, Output>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly repository: SimpleProductRepositoryContract
  ) {}

  async execute(): Promise<Output> {
    const simpleProducts = await this.repository.findAll()
    const products = await this.productRepository.findAll()

    const output: Output = simpleProducts.map(simple => {
      const correspondingProduct = products.find(
        product => product.id === simple.productId
      )
      if (!correspondingProduct) {
        throw new Error(
          `Corresponding product not found for SimpleProduct with productId: ${simple.productId}`
        )
      }
      return {
        ...correspondingProduct,
        ...simple
      }
    })

    return output
  }
}
