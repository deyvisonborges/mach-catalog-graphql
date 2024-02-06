import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { VirtualProductRepositoryTypeAdapter } from './virtual-product.repository.type.adapter'

export type VirtualProductRepositoryContract = {
  findByProductId(
    productId: string
  ): Promise<VirtualProductRepositoryTypeAdapter | null>
} & BaseRepositoryContract<VirtualProductRepositoryTypeAdapter>
