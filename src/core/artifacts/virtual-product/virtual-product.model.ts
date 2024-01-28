import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'
import { ProductModelProps } from '../product/product.model'

export type VirtualProductModelProps = {
  downloadLink: string
  product: ProductModelProps
} & BaseModelProps

export class VirtualProductModel
  extends BaseModel
  implements VirtualProductModelProps
{
  downloadLink: string
  product: ProductModelProps

  constructor(props: VirtualProductModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: VirtualProductModelProps): VirtualProductModelProps {
    return new VirtualProductModel(props)
  }
}
