import { CategoryModelProps } from '../category/category.model'
import { ProductTypeModelProps } from '../product-type/product-type.model'
import { ProductModelProps } from './product.model'

export type ProductModelPropsAdapter = Omit<
  ProductModelProps,
  'productTypeId' | 'categoriesIds'
> & {
  productType: ProductTypeModelProps
  categories: CategoryModelProps[]
}
