import { Field, InputType } from '@nestjs/graphql'
import { ProductImageProps } from 'src/core/artifacts/product-image/product-image.model'

@InputType()
export class ProductImageInput implements ProductImageProps {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => String)
  url: string

  @Field(() => String, { nullable: true })
  productId?: string
}
