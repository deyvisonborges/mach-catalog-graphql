import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductModelProps } from '../product/product.model'

export type ProductImageModelProps = {
  link: string
  description: string
  products: Set<ProductModelProps>
} & BaseModelProps

export class ProductImageModel implements ProductImageModelProps {
  link: string
  description: string
  products: Set<ProductModelProps>
  id?: string
  active?: boolean
  createdAt?: Date
  updatedAt?: Date

  constructor(props: ProductImageModelProps) {
    Object.assign(props)
  }
}
