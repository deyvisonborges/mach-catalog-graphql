import { ProductImageProps } from '../../product-image/product-image.model'
import { ProductTypeConstant } from '../product.constants'
import { ProductContract, ProductContractProps } from '../product.contract'

export type VirtualProductProps = {
  downloadLink: string
} & ProductContractProps

export class VirtualProduct
  extends ProductContract<VirtualProductProps>
  implements VirtualProductProps
{
  downloadLink: string
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  images: ProductImageProps[]
  type: ProductTypeConstant = 'VIRTUAL_PRODUCT'

  constructor(props: VirtualProductProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: VirtualProductProps): VirtualProductProps {
    return new VirtualProduct(props)
  }
}
