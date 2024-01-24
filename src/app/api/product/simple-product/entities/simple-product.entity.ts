import { ObjectType, Field } from '@nestjs/graphql'
import { SimpleProductProps } from '../../../../../core/artifacts/product/variants/simple-product.model'
import {
  ProductImage,
  ProductImageProps
} from 'src/core/artifacts/product-image/product-image.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'

@ObjectType()
export class SimpleProduct implements SimpleProductProps {
  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  sku: string

  @Field()
  salePrice: number

  @Field()
  costPrice: number

  @Field()
  promotionalPrice: number

  @Field()
  thumbnail: string

  @Field()
  type: ProductTypeConstant

  @Field(() => [ProductImageOT])
  images: ProductImageProps[]
}

@ObjectType()
export class ProductImageOT implements ProductImageProps {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  url: string

  @Field()
  productId?: string
}
