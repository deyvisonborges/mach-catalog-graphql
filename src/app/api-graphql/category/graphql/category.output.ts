import { Field, ObjectType } from '@nestjs/graphql'
import { CategoryModelProps } from '../../../../core/artifacts/category/category.model'

@ObjectType()
export class CategoryOutput implements CategoryModelProps {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => Boolean, { nullable: true })
  active?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}
