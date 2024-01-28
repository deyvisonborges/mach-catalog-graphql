import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { VirtualProductModelProps } from '../virtual-product.model'
import { VirtualProductRepositoryContract } from './virtual-product.repository.contract'

export class VirtualProductInMemoryRepository
  extends InMemoryBaseRepository<VirtualProductModelProps>
  implements VirtualProductRepositoryContract {}
