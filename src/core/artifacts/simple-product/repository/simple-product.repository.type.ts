import { ProductModelProps } from '../../product/product.model'
import { SimpleProductModelProps } from '../simple-product.model'

export type SimpleProductRepositoryType = Omit<
  SimpleProductModelProps,
  keyof ProductModelProps
> & { productId: string }
