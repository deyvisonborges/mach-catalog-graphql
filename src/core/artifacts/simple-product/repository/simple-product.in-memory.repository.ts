import { InMemoryBaseRepository } from '../../../../core/common/base/in-memory-repository.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from './simple-product.repository.contract'

export class SimpleProductInMemoryRepository
  extends InMemoryBaseRepository<SimpleProductModelProps>
  implements SimpleProductRepositoryContract {}
