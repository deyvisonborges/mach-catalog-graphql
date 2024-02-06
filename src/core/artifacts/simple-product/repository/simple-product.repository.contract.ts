import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { SimpleProductRepositoryTypeAdapter } from './simple-product.repository.type'

export type SimpleProductRepositoryContract = {
  findByProductId(
    productId: string
  ): Promise<SimpleProductRepositoryTypeAdapter | null>
} & BaseRepositoryContract<SimpleProductRepositoryTypeAdapter>
