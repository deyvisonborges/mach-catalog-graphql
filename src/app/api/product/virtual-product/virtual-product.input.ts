import { Field, InputType } from '@nestjs/graphql'
import { BaseProductInput } from '../product.input.base'

@InputType()
export class VirtualProductInputType extends BaseProductInput {
  @Field()
  downloadLink: string
}
