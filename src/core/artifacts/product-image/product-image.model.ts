import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'

export type ProductImageProps = {
  name: string
  description: string
  url: string

  /**
   * ID opcional do produto ao qual a imagem está associada.
   * Isso cria uma relação "Optional One-to-Many" ou "One-to-Zero-or-Many".
   * @backReference ProductContractProps.images
   */
  productId?: string
} & BaseModelProps

export class ProductImage extends BaseModel implements ProductImageProps {
  name: string
  description: string
  url: string
  productId?: string

  constructor(props: ProductImageProps) {
    super(props)
    Object.assign(this, props)
  }
}
