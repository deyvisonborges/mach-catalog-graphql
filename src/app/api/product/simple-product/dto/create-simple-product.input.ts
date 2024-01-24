import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateSimpleProductInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
