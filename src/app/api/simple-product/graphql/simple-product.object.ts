import { Field, Float, ObjectType } from '@nestjs/graphql'
import { SimpleProductModelProps } from 'src/core/artifacts/simple-product/simple-product.model'

@ObjectType()
export class SimpleProductObject implements SimpleProductModelProps {
  @Field(() => String)
  size: string

  @Field(() => Float)
  weight: number

  @Field(() => String)
  material: string

  @Field(() => String)
  productId: string
}
