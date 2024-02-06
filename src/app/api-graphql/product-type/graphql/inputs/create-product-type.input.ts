import { Field, InputType } from '@nestjs/graphql'
import { CreateProductTypeServiceInput } from 'src/core/artifacts/product-type/service/create-product-type.service'

@InputType()
export class CreateProductTypeInputApi
  implements CreateProductTypeServiceInput
{
  @Field(() => String)
  name: string
}
