import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'

export type ProductModelProps = {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  productTypeId: string
} & BaseModelProps

export abstract class ProductModel<T extends ProductModelProps>
  extends BaseModel
  implements ProductModelProps
{
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  productTypeId: string

  abstract create(props: T): T
}
