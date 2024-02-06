import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { ProductRepositoryContract } from './product.repository.contract'
import { ProductRepositoryTypeAdapter } from './product.repository.type.adapter'

export class ProductInMemoryRepository
  extends InMemoryBaseRepository<ProductRepositoryTypeAdapter>
  implements ProductRepositoryContract
{
  async findProductBySku(sku: string): Promise<ProductRepositoryTypeAdapter> {
    return await this.items.find(product =>
      product.sku.toLowerCase() === sku.toLowerCase() ? product : null
    )
  }
}
