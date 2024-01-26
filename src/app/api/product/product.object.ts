import { ObjectType, Field } from '@nestjs/graphql'
import { ProductImageProps } from 'src/core/artifacts/product-image/product-image.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'
import { BaseProductInput } from './product.input.base'

@ObjectType({ implements: BaseProductInput })
export class ProductObject implements BaseProductInput {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  images: ProductImageProps[]
  type: ProductTypeConstant

  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string
}
