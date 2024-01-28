import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { ProductTypeModelProps } from '../product-type.model'
import { ProductTypeRepositoryContract } from './product-type.repository.contract'

export class ProductTypeInMemoryRepository
  extends InMemoryBaseRepository<ProductTypeModelProps>
  implements ProductTypeRepositoryContract {}
