import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductRepositoryTypeAdapter } from './product.repository.type.adapter'

export type ProductRepositoryContract = {
  findProductBySku(
    sku: ProductRepositoryTypeAdapter['sku']
  ): Promise<ProductRepositoryTypeAdapter | null>
} & BaseRepositoryContract<ProductRepositoryTypeAdapter>
