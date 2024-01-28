import { Field, InputType } from '@nestjs/graphql'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'
import { VirtualProductModelProps } from 'src/core/artifacts/virtual-product/virtual-product.model'
import { ProductInput } from './product.input'

@InputType()
export class VirtualProductInput implements VirtualProductModelProps {
  @Field(() => String, { name: 'downloand_link' })
  downloadLink: string

  @Field(() => ProductInput)
  product: ProductModelProps
}
