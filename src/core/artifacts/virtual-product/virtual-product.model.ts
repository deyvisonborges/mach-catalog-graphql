import { ProductModel, ProductModelProps } from '../product/product.model'

export type VirtualProductModelProps = {
  downloadLink: string
} & ProductModelProps

export class VirtualProductModel
  extends ProductModel<VirtualProductModelProps>
  implements VirtualProductModelProps
{
  downloadLink: string

  constructor(props: VirtualProductModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: VirtualProductModelProps): VirtualProductModelProps {
    return new VirtualProductModel(props)
  }
}
