import { ProductModelProps } from '../../product/product.model'
import { VirtualProductModelProps } from '../virtual-product.model'

export type VirtualProductRepositoryTypeAdapter = Omit<
  VirtualProductModelProps,
  keyof ProductModelProps | 'categoriesIds'
> & { productId: string }
