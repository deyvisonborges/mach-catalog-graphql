import { Field, ObjectType } from '@nestjs/graphql'
import { VirtualProductModelProps } from '../../../../core/artifacts/virtual-product/virtual-product.model'
import { ProductObject } from './product.object'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'

@ObjectType()
export class VirtualProductObject implements VirtualProductModelProps {
  @Field(() => String, { name: 'downloand_link' })
  downloadLink: string

  @Field(() => ProductObject)
  product: ProductModelProps
}
