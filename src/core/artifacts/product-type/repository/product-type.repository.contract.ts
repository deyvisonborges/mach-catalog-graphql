import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'
import { ProductTypeModelProps } from '../product-type.model'

export type ProductTypeRepositoryContract = {
  findByName(name: string): Promise<ProductTypeModelProps | null>
} & BaseRepositoryContract<ProductTypeModelProps>
