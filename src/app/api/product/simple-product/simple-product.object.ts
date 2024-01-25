import { ObjectType, Field } from '@nestjs/graphql'
import { ProductImageProps } from 'src/core/artifacts/product-image/product-image.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'
import { SimpleProductProps } from 'src/core/artifacts/product/variants/virtual-product/simple-product.model'
import { BaseProductInput } from '../product.input.base'

@ObjectType({ implements: BaseProductInput })
export class SimpleProductObject
  implements BaseProductInput, SimpleProductProps
{
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
