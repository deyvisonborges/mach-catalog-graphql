import { Field, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'

@ObjectType()
export class ProductTypeOutput implements ProductTypeModelProps {
  @Field(() => String)
  name: string
}
