import { Field, Float, ObjectType } from '@nestjs/graphql'
import { VirtualProductModelProps } from '../../../../core/artifacts/virtual-product/virtual-product.model'

@ObjectType()
export class VirtualProductObject implements VirtualProductModelProps {
  @Field(() => String)
  downloadLink: string

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
