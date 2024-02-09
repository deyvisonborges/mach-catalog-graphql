import { Field, InputType } from '@nestjs/graphql'
import { UpdateCategoryServiceInput } from 'src/core/artifacts/category/service/update-category.service'

@InputType()
export class UpdateCategoryInputApi implements UpdateCategoryServiceInput {
  @Field(() => String)
  id: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string
}
