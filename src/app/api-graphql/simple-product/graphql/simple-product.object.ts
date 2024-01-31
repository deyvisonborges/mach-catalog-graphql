import { Field, ObjectType } from '@nestjs/graphql'
import { SimpleProductModelProps } from 'src/core/artifacts/simple-product/simple-product.model'

@ObjectType()
export class SimpleProductObject implements SimpleProductModelProps {
  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string

  @Field()
  productTypeId: string

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
}
