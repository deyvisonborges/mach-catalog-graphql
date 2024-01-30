import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'

export type SimpleProductModelProps = {
  size: string
  weight: number
  material: string
  productId: string
} & BaseModelProps

export class SimpleProductModel
  extends BaseModel
  implements SimpleProductModelProps
{
  size: string
  weight: number
  material: string
  productId: string

  constructor(props: SimpleProductModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: SimpleProductModelProps): SimpleProductModelProps {
    return new SimpleProductModel(props)
  }
}
