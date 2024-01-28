import { SimpleProductModelProps } from '../simple-product/simple-product.model'
import { VirtualProductModelProps } from '../virtual-product/virtual-product.model'

export type ProductTypeConstant = 'SIMPLE_PRODUCT' | 'VIRTUAL_PRODUCT'
// | 'CONFIGURABLE_PRODUCT'
// | 'GROUPED_PRODUCT'
// | 'BUNDLE_PRODUCT'
// | 'DOWNLOADABLE_PRODUCT'
// | 'GITF_CARD'

export type ProductTypesUnion =
  | SimpleProductModelProps
  | VirtualProductModelProps
