import { Field, Float, InputType } from '@nestjs/graphql'
import { CreateASimpleProductServiceInput } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'

@InputType()
export class SimpleProductInput implements CreateASimpleProductServiceInput {
  @Field(() => String)
  size: string

  @Field(() => Float)
  weight: number

  @Field(() => String)
  material: string

  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => String)
  sku: string

  @Field(() => Float)
  salePrice: number

  @Field(() => Float)
  costPrice: number

  @Field(() => Float)
  promotionalPrice: number

  @Field(() => String)
  thumbnail: string

  @Field(() => String)
  productTypeId: string
}
