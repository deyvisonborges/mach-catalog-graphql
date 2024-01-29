import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'
import { ProductModelProps } from '../product/product.model'

export type SimpleProductModelProps = {
  size: string
  weight: number
  material: string
  product: ProductModelProps
} & BaseModelProps

export class SimpleProductModel
  extends BaseModel
  implements SimpleProductModelProps
{
  size: string
  weight: number
  material: string
  product: ProductModelProps

  constructor(props: SimpleProductModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: SimpleProductModelProps): SimpleProductModelProps {
    return new SimpleProductModel(props)
  }
}
