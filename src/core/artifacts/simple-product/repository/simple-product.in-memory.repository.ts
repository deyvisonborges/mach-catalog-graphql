import { InMemoryBaseRepository } from '../../../../core/common/base/in-memory-repository.base'
import { SimpleProductRepositoryContract } from './simple-product.repository.contract'
import { SimpleProductRepositoryTypeAdapter } from './simple-product.repository.type'

export class SimpleProductInMemoryRepository
  extends InMemoryBaseRepository<SimpleProductRepositoryTypeAdapter>
  implements SimpleProductRepositoryContract
{
  async findByProductId(
    productId: string
  ): Promise<SimpleProductRepositoryTypeAdapter> {
    return await this.items.find(product =>
      product.productId === productId ? product : null
    )
  }
}
