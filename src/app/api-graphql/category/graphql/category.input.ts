import { Field, InputType } from '@nestjs/graphql'
import { CreateCategoryInput } from '../../../../core/artifacts/category/service/create-category.service'

@InputType()
export class CategoryInput implements CreateCategoryInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string
}
