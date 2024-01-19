import { InMemoryBaseRepository } from '../../../core/common/base/in-memory-repository.base'
import { ProductRepositoryContract } from './product.repository.contract'
import { ProductCreatorVariants } from './product.creator.contract'

export class ProductInMemoryRepository
  extends InMemoryBaseRepository<ProductCreatorVariants>
  implements ProductRepositoryContract {}
