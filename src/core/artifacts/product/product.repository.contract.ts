import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductCreatorVariants } from './product.creator.contract'

export type ProductRepositoryContract =
  BaseRepositoryContract<ProductCreatorVariants>
