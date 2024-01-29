import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductModelProps } from '../product.model'

export type ProductRepositoryContract = {
  findProductBySku(
    sku: ProductModelProps['sku']
  ): Promise<ProductModelProps | null>
} & BaseRepositoryContract<ProductModelProps>
