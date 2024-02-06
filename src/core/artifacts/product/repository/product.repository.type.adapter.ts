import { ProductModelProps } from '../product.model'

export type ProductRepositoryTypeAdapter = Omit<
  ProductModelProps,
  'categoriesIds'
>
