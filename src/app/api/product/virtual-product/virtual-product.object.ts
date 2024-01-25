import { Field, ObjectType } from '@nestjs/graphql'
import { BaseProductInput } from '../product.input.base'
import { VirtualProductProps } from 'src/core/artifacts/product/variants/virtual-product.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'
import { ProductImageProps } from 'src/core/artifacts/product-image/product-image.model'

@ObjectType({ implements: BaseProductInput })
export class VirtualProductObject
  implements BaseProductInput, VirtualProductProps
{
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  type: ProductTypeConstant
  images: ProductImageProps[]

  @Field()
  downloadLink: string
}
