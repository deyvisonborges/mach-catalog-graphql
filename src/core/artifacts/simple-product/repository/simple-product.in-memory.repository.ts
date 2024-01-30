import { InMemoryBaseRepository } from '../../../../core/common/base/in-memory-repository.base'
import { SimpleProductRepositoryContract } from './simple-product.repository.contract'
import { SimpleProductRepositoryType } from './simple-product.repository.type'

export class SimpleProductInMemoryRepository
  extends InMemoryBaseRepository<SimpleProductRepositoryType>
  implements SimpleProductRepositoryContract {}
