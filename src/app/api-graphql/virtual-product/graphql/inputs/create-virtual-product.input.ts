import { Field, Float, InputType } from '@nestjs/graphql'
import { CreateAVirtualProductServiceInput } from 'src/core/artifacts/virtual-product/service/create-a-virtual-product.service'

@InputType()
export class CreateAVirtualProductServiceInputApi
  implements CreateAVirtualProductServiceInput
{
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
