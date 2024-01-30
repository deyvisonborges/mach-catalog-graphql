import { ProductModel, ProductModelProps } from '../product/product.model'

export type SimpleProductModelProps = {
  size: string
  weight: number
  material: string
} & ProductModelProps

export class SimpleProductModel
  extends ProductModel<SimpleProductModelProps>
  implements SimpleProductModelProps
{
  size: string
  weight: number
  material: string

  constructor(props: SimpleProductModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: SimpleProductModelProps): SimpleProductModelProps {
    return new SimpleProductModel(props)
  }
}
