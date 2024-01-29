import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { ProductRepositoryContract } from './product.repository.contract'
import { ProductModelProps } from '../product.model'

export class ProductInMemoryRepository
  extends InMemoryBaseRepository<ProductModelProps>
  implements ProductRepositoryContract
{
  async findProductBySku(sku: string): Promise<ProductModelProps> {
    return await this.items.find(product =>
      product.sku.toLowerCase() === sku.toLowerCase() ? product : null
    )
  }
}
