import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductRepositoryTypeAdapter } from './product.repository.type.adapter'

export type ProductRepositoryContract = {
  findProductBySku(
    sku: ProductRepositoryTypeAdapter['sku']
  ): Promise<ProductRepositoryTypeAdapter | null>
  findByIds(productIds: string[]): Promise<ProductRepositoryTypeAdapter[]>
} & BaseRepositoryContract<ProductRepositoryTypeAdapter>

export const PRODUCT_REPOSITORY_TOKEN = 'product_repository_token'
