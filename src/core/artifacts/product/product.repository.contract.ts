import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductCreatorVariants } from './product.creator.contract'
import { ProductTypeConstant } from './product.constants'

export type ProductRepositoryContract = {
  findProductByType(
    type: ProductTypeConstant
  ): Promise<ProductCreatorVariants | null>
} & BaseRepositoryContract<ProductCreatorVariants>
