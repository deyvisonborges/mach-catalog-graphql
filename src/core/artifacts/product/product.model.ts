import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'
import { ProductTypeConstant } from './product.constants'

export type ProductModelProps = {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  productTypeId: string
  categoriesIds: Map<string, string>
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
  categoriesIds: Map<string, string>

  abstract create(props: T): T
}
