import { ObjectType, Field } from '@nestjs/graphql'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'

@ObjectType()
export class ProductObject implements ProductModelProps {
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

  @Field(() => String)
  productTypeId: string
}
