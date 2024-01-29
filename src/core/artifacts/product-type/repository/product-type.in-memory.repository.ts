import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { ProductTypeModelProps } from '../product-type.model'
import { ProductTypeRepositoryContract } from './product-type.repository.contract'

export class ProductTypeInMemoryRepository
  extends InMemoryBaseRepository<ProductTypeModelProps>
  implements ProductTypeRepositoryContract
{
  async findByName(name: string): Promise<ProductTypeModelProps | null> {
    const foundProduct = this.items.find(
      product => product.name.toLowerCase() === name.toLowerCase()
    )
    return foundProduct || null
  }
}
