import { ProductModelProps } from '../../product/product.model'
import { SimpleProductModelProps } from '../simple-product.model'

export type SimpleProductRepositoryTypeAdapter = Omit<
  SimpleProductModelProps,
  keyof ProductModelProps | 'categoriesIds'
> & { productId: string }
