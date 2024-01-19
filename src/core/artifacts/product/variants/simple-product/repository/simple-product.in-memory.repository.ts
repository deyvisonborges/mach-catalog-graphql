import { InMemoryBaseRepository } from '../../../../../../core/common/base/in-memory-repository.base'
import { SimpleProductRepositoryContract } from './simple-product.repository.contract'
import { SimpleProductProps } from '../simple-product.model'

export class SimpleProductInMemoryRepository
  extends InMemoryBaseRepository<SimpleProductProps>
  implements SimpleProductRepositoryContract {}
