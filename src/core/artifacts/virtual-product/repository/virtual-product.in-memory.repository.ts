import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { VirtualProductRepositoryContract } from './virtual-product.repository.contract'
import { VirtualProductRepositoryTypeAdapter } from './virtual-product.repository.type.adapter'

export class VirtualProductInMemoryRepository
  extends InMemoryBaseRepository<VirtualProductRepositoryTypeAdapter>
  implements VirtualProductRepositoryContract
{
  async findByProductId(
    productId: string
  ): Promise<VirtualProductRepositoryTypeAdapter> {
    return await this.items.find(product =>
      product.productId === productId ? product : null
    )
  }
}
