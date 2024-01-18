import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductModel, ProductModelProps } from './product.model'

export type SimpleProductProps = {
  size: string
  weight: number
  material: string
} & BaseModelProps &
  ProductModelProps

export class SimpleProduct
  extends ProductModel<SimpleProductProps>
  implements SimpleProductProps
{
  size: string
  weight: number
  material: string

  constructor(props: SimpleProductProps) {
    super(props)
    Object.assign(this, props)
  }

  create(): SimpleProduct {
    return new SimpleProduct(this)
  }
}
