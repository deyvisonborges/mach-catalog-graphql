import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'

export type ProductCategoryRepositoryType =
  | ProductModelProps
  | CategoryModelProps
