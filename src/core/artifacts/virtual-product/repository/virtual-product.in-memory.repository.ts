import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { VirtualProductRepositoryContract } from './virtual-product.repository.contract'
import { VirtualProductRepositoryType } from './virtual-product.repository.type'

export class VirtualProductInMemoryRepository
  extends InMemoryBaseRepository<VirtualProductRepositoryType>
  implements VirtualProductRepositoryContract {}
