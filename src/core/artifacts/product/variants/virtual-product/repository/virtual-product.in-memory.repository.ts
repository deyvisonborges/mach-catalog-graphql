import { InMemoryBaseRepository } from 'src/core/common/base/in-memory-repository.base'
import { VirtualProductProps } from '../virtual-product.model'
import { VirtualProductRepositoryContract } from './virtual-product.repository.contract'

export class VirtualProductInMemoryRepository
  extends InMemoryBaseRepository<VirtualProductProps>
  implements VirtualProductRepositoryContract {}
