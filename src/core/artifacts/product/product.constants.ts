import { SimpleProductModelProps } from '../simple-product/simple-product.model'
import { VirtualProductModelProps } from '../virtual-product/virtual-product.model'

export type ProductTypesUnion =
  | SimpleProductModelProps
  | VirtualProductModelProps
