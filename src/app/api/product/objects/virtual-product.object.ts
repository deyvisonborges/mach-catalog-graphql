import { Field, ObjectType } from '@nestjs/graphql'
import { VirtualProductModelProps } from '../../../../core/artifacts/virtual-product/virtual-product.model'
import { ProductModelProps } from '../../../../core/artifacts/product/product.model'
import { ProductObject } from './product.object'

@ObjectType()
export class VirtualProductObject implements VirtualProductModelProps {
  @Field(() => String, { name: 'downloand_link' })
  downloadLink: string

  @Field(() => ProductObject)
  product: ProductModelProps
}
