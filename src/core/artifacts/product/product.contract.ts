import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'
import { ProductTypeConstant } from './product.constants'

export type ProductContractProps = {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  type: ProductTypeConstant
} & BaseModelProps

export abstract class ProductContract<
  T extends ProductContractProps
> extends BaseModel {
  abstract create(props: T): T
}
