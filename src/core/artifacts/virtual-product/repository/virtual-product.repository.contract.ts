import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { VirtualProductRepositoryType } from './virtual-product.repository.type'

export type VirtualProductRepositoryContract = {
  findByProductId(
    productId: string
  ): Promise<VirtualProductRepositoryType | null>
} & BaseRepositoryContract<VirtualProductRepositoryType>
