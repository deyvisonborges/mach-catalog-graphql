import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { SimpleProductRepositoryType } from './simple-product.repository.type'

export type SimpleProductRepositoryContract =
  BaseRepositoryContract<SimpleProductRepositoryType>
