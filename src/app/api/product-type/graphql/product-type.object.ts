import { Field, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'

@ObjectType()
export class ProductTypeObject implements ProductTypeModelProps {
  @Field(() => String)
  name: ProductTypeConstant
}
