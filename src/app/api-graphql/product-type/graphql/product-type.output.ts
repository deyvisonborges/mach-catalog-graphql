import { Field, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'

@ObjectType()
export class ProductTypeOutput implements ProductTypeModelProps {
  @Field(() => String)
  name: ProductTypeConstant

  @Field(() => String)
  id?: string

  @Field(() => Boolean)
  active?: boolean

  @Field(() => Date)
  createdAt?: Date

  @Field(() => Date)
  updatedAt?: Date
}
