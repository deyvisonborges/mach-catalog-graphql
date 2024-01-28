import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductModelProps } from '../product.model'
import { ProductTypesUnion } from '../product.constants'

export type ProductRepositoryContract = {
  findProductBySku(
    sku: ProductModelProps['sku']
  ): Promise<ProductTypesUnion | null>
} & BaseRepositoryContract<ProductTypesUnion>
