import { Field, InputType } from '@nestjs/graphql'
import { CreateCategoryInput } from 'src/core/artifacts/category/service/create-category.service'

@InputType()
export class CreateCategoryInputApi implements CreateCategoryInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string
}
