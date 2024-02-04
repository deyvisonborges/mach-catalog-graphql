import { InMemoryBaseRepository } from '../../../../core/common/base/in-memory-repository.base'
import { SimpleProductRepositoryContract } from './simple-product.repository.contract'
import { SimpleProductRepositoryType } from './simple-product.repository.type'

export class SimpleProductInMemoryRepository
  extends InMemoryBaseRepository<SimpleProductRepositoryType>
  implements SimpleProductRepositoryContract
{
  async findByProductId(
    productId: string
  ): Promise<SimpleProductRepositoryType> {
    return await this.items.find(product =>
      product.productId === productId ? product : null
    )
  }
}
