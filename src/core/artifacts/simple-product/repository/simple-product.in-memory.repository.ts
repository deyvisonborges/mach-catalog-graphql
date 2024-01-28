import { InMemoryBaseRepository } from '../../../../core/common/base/in-memory-repository.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from './simple-product.repository.contract'

export class SimpleProductInMemoryRepository
  extends InMemoryBaseRepository<SimpleProductModelProps>
  implements SimpleProductRepositoryContract
{
  async findByProductId(productId: string): Promise<SimpleProductModelProps> {
    return await this.items.find(result =>
      result.product.id === productId ? result : null
    )
  }
}
