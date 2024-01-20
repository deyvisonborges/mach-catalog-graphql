import { InMemoryBaseRepository } from '../../../core/common/base/in-memory-repository.base'
import { ProductRepositoryContract } from './product.repository.contract'
import { ProductCreatorVariants } from './product.creator.contract'
import { ProductTypeConstant } from './product.constants'

export class ProductInMemoryRepository
  extends InMemoryBaseRepository<ProductCreatorVariants>
  implements ProductRepositoryContract
{
  async findProductByType(
    type: ProductTypeConstant
  ): Promise<ProductCreatorVariants> {
    return await this.items.find(product => product.type === type)
  }
}
