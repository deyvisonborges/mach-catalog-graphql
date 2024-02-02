import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CategoryOutput } from './category.output'
import { CategoryInput } from './category.input'
import { Inject } from '@nestjs/common'
import { CreateCategoryService } from '../../../../core/artifacts/category/service/create-category.service'

@Resolver(() => CategoryOutput)
export class CategoryResolver {
  @Inject()
  private readonly createCategoryService: CreateCategoryService

  @Mutation(() => CategoryOutput)
  async createCategory(@Args('input') input: CategoryInput) {
    return await this.createCategoryService.execute(input)
  }
}
