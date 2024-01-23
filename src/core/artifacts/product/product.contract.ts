import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'
import { ProductImageProps } from '../product-image/product-image.model'
import { ProductTypeConstant } from './product.constants'

export type ProductContractProps = {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  type: ProductTypeConstant
  /**
   * Relação "One-to-Many" com ProductImage.
   * Cada produto pode ter várias imagens associadas.
   * @backReference ProductImageProps.product
   */
  images: ProductImageProps[]
} & BaseModelProps

export abstract class ProductContract<
  T extends ProductContractProps
> extends BaseModel {
  abstract create(props: T): T
}
