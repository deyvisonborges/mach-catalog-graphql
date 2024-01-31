import { Field, InputType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'

@InputType()
export class ProductTypeInput implements ProductTypeModelProps {
  @Field(() => String)
  name: ProductTypeConstant
}
