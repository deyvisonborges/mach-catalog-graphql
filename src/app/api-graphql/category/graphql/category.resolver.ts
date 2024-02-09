import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { Inject, UseGuards } from '@nestjs/common'
import { CategoryOutput } from './category.output'
import { CreateCategoryService } from '../../../../core/artifacts/category/service/create-category.service'
import { DeleteCategoryService } from '../../../../core/artifacts/category/service/delete-category.service'
import { FindAllCategoriesService } from '../../../../core/artifacts/category/service/find-all-categories.service'
import { FindOneCategoryService } from '../../../../core/artifacts/category/service/find-one-category.service'
import { CreateCategoryInputApi } from './inputs/create-category.input'
import { JwtGuard } from '../../../../external/jwt.guard'
import { RolesGuard } from '../../../../external/roles.guard'
import { HasRoles } from '../../../../external/roles.decorator'
import { RoleEnum } from '../../../../external/roles.constant'
import { UpdateCategoryService } from 'src/core/artifacts/category/service/update-category.service'
import { UpdateCategoryInputApi } from './inputs/update-category.input'

@Resolver(() => CategoryOutput)
export class CategoryResolver {
  @Inject() private readonly createCategoryService: CreateCategoryService
  @Inject() private readonly removeCategoryService: DeleteCategoryService
  @Inject() private readonly findOneCategoryService: FindOneCategoryService
  @Inject() private readonly findAllCategoryService: FindAllCategoriesService
  @Inject() private readonly updateCategoryService: UpdateCategoryService

  @HasRoles(RoleEnum.ADMIN, RoleEnum.MANAGER)
  @UseGuards(JwtGuard, RolesGuard)
  @Mutation(() => CategoryOutput)
  async createCategory(@Args('input') input: CreateCategoryInputApi) {
    return await this.createCategoryService.execute(input)
  }

  @HasRoles(RoleEnum.ADMIN, RoleEnum.MANAGER)
  @UseGuards(JwtGuard, RolesGuard)
  @Mutation(() => CategoryOutput)
  async removeCategory(@Args('id', { type: () => String }) id: string) {
    return await this.removeCategoryService.execute({ id })
  }

  @HasRoles(RoleEnum.ADMIN, RoleEnum.MANAGER)
  @UseGuards(JwtGuard, RolesGuard)
  @Query(() => CategoryOutput)
  async findOne(@Args('input') id: string): Promise<CategoryOutput> {
    return await this.findOneCategoryService.execute({ id })
  }

  @HasRoles(RoleEnum.ADMIN, RoleEnum.MANAGER, RoleEnum.CUSTOMER)
  @UseGuards(JwtGuard, RolesGuard)
  @Query(() => [CategoryOutput])
  async findAllCategories(): Promise<CategoryOutput[]> {
    return await this.findAllCategoryService.execute()
  }

  @HasRoles(RoleEnum.ADMIN, RoleEnum.MANAGER)
  @UseGuards(JwtGuard, RolesGuard)
  @Mutation(() => String)
  async updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInputApi
  ) {
    await this.updateCategoryService.execute(updateCategoryInput)
    return 'Successfully'
  }
}
