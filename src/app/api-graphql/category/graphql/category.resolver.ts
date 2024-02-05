import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { CategoryOutput } from './category.output'
import { CategoryInput } from './category.input'
import { CreateCategoryService } from '../../../../core/artifacts/category/service/create-category.service'
import { DeleteCategoryService } from '../../../../core/artifacts/category/service/delete-category.service'
import { RetrieveASingleCategory } from '../../../../core/artifacts/category/service/find-category-by-id.service'
import { FindAllCategoriesService } from '../../../../core/artifacts/category/service/find-all-categories.service'

@Resolver(() => CategoryOutput)
export class CategoryResolver {
  @Inject() private readonly createCategoryService: CreateCategoryService
  @Inject() private readonly removeCategoryService: DeleteCategoryService
  @Inject() private readonly findOneCategoryService: RetrieveASingleCategory
  @Inject() private readonly findAllCategoryService: FindAllCategoriesService

  @Mutation(() => CategoryOutput)
  async createCategory(@Args('input') input: CategoryInput) {
    return await this.createCategoryService.execute(input)
  }

  @Mutation(() => CategoryOutput)
  async removeCategory(@Args('id', { type: () => String }) id: string) {
    return await this.removeCategoryService.execute({ id })
  }

  @Query(() => CategoryOutput)
  async findOne(@Args('input') id: string): Promise<CategoryOutput> {
    return await this.findOneCategoryService.execute({ id })
  }

  @Query(() => [CategoryOutput])
  async findAllCategories(): Promise<CategoryOutput[]> {
    return await this.findAllCategoryService.execute()
  }
}
