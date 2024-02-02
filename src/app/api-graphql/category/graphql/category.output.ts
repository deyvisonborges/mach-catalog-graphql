import { Field, ObjectType } from '@nestjs/graphql'
import { CategoryModelProps } from '../../../../core/artifacts/category/category.model'

@ObjectType()
export class CategoryOutput implements CategoryModelProps {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string
}
