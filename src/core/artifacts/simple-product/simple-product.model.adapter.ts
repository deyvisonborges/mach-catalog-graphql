import { CategoryModelProps } from '../category/category.model'
import { ProductTypeModelProps } from '../product-type/product-type.model'
import { SimpleProductModelProps } from './simple-product.model'

export type SimpleProductModelPropsAdapter = Omit<
  SimpleProductModelProps,
  'productTypeId' | 'categoriesIds'
> & {
  productType: ProductTypeModelProps
  categories: CategoryModelProps[]
}
