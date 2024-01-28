import { Field, InputType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'

@InputType()
export class ProductTypeInput implements ProductTypeModelProps {
  @Field(() => String)
  name: string
}
