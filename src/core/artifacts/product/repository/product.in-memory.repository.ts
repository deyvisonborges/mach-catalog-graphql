import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { ProductRepositoryContract } from './product.repository.contract'
import { ProductTypesUnion } from '../product.constants'

export class ProductInMemoryRepository
  extends InMemoryBaseRepository<ProductTypesUnion>
  implements ProductRepositoryContract
{
  async findProductBySku(sku: string): Promise<ProductTypesUnion> {
    return await this.items.find(product =>
      product.product.sku.toLowerCase() === sku.toLowerCase() ? product : null
    )
  }
}
