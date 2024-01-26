import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductVariantType } from '../product.creator.contract'
import { ProductTypeConstant } from '../product.constants'
import { ProductContractProps } from '../product.contract'

export type ProductRepositoryContract = {
  findProductByType(
    type: ProductTypeConstant
  ): Promise<ProductVariantType | null>

  findProductBySku(
    sku: ProductContractProps['sku']
  ): Promise<ProductVariantType | null>
} & BaseRepositoryContract<ProductVariantType>
