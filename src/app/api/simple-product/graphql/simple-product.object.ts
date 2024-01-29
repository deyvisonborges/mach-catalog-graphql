import { Field, ObjectType } from '@nestjs/graphql'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'
import { SimpleProductModelProps } from 'src/core/artifacts/simple-product/simple-product.model'
import { ProductObject } from '../../product/graphql/product.object'

@ObjectType()
export class SimpleProductObject implements SimpleProductModelProps {
  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string

  @Field(() => ProductObject)
  product: ProductModelProps
}
