import { Field, ObjectType } from '@nestjs/graphql'
import { ProductImageProps } from '../../../../core/artifacts/product-image/product-image.model'

@ObjectType()
export class ProductImageObject implements ProductImageProps {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => String)
  url: string

  @Field(() => String, { nullable: true })
  productId?: string
}
