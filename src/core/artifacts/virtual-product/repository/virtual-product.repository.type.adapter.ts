import { ProductModelProps } from '../../product/product.model'
import { VirtualProductModelProps } from '../virtual-product.model'

export type VirtualProductRepositoryType = Omit<
  VirtualProductModelProps,
  keyof ProductModelProps
> & { productId: string }
