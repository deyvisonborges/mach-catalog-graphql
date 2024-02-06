import { CategoryModelProps } from '../category/category.model'
import { ProductTypeModelProps } from '../product-type/product-type.model'
import { VirtualProductModelProps } from './virtual-product.model'

export type VirtualProductModelPropsAdapter = Omit<
  VirtualProductModelProps,
  'productTypeId' | 'categoriesIds'
> & {
  productType: ProductTypeModelProps
  categories: CategoryModelProps[]
}
