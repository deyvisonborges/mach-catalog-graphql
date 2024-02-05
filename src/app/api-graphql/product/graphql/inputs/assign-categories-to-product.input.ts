import { Field, InputType } from '@nestjs/graphql'
import { AssignCategoriesToProductInput } from 'src/core/artifacts/category/service/assign-categories-to-product.service'

@InputType()
export class AssignCategoriesToProductInputApi
  implements AssignCategoriesToProductInput
{
  @Field(() => String)
  productId: string

  @Field(() => [String])
  categoriesIds: string[]
}
