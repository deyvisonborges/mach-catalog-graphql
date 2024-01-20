import { InMemoryBaseRepository } from '../../../core/common/base/in-memory-repository.base'
import { ProductRepositoryContract } from './product.repository.contract'
import { ProductVariantType } from './product.creator.contract'
import { ProductTypeConstant } from './product.constants'

export class ProductInMemoryRepository
  extends InMemoryBaseRepository<ProductVariantType>
  implements ProductRepositoryContract
{
  async findProductByType(
    type: ProductTypeConstant
  ): Promise<ProductVariantType> {
    return await this.items.find(product => product.type === type)
  }
}
