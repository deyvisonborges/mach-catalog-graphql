import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { VirtualProductRepositoryContract } from './virtual-product.repository.contract'
import { VirtualProductRepositoryType } from './virtual-product.repository.type.adapter'

export class VirtualProductInMemoryRepository
  extends InMemoryBaseRepository<VirtualProductRepositoryType>
  implements VirtualProductRepositoryContract
{
  async findByProductId(
    productId: string
  ): Promise<VirtualProductRepositoryType> {
    return await this.items.find(product =>
      product.productId === productId ? product : null
    )
  }
}
