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

export class ProductModel extends BaseModel implements ProductModelProps {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  productTypeId: string

  constructor(props: ProductModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: ProductModelProps): ProductModelProps {
    return new ProductModel(props)
  }
}
