import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductsUnion } from './product.union'
import { Inject, UseGuards } from '@nestjs/common'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductsOutput } from './products.output'
import { AssignCategoriesToProductInputApi } from './inputs/assign-categories-to-product.input'
import { AssignCategoriesToProductService } from 'src/core/artifacts/category/service/assign-categories-to-product.service'
import { HasRoles } from 'src/external/roles.decorator'
import { RoleEnum } from 'src/external/roles.constant'
import { RolesGuard } from 'src/external/roles.guard'
import { JwtGuard } from 'src/external/jwt.guard'
import { FindProductsByIds } from 'src/core/artifacts/product/service/find-product-by-ids.service'

@Resolver(() => ProductsUnion)
export class ProductResolver {
  @Inject()
  private readonly findAllProducts: FindAllProductsService
  @Inject()
  private readonly assignCategoriesToProductService: AssignCategoriesToProductService
  @Inject()
  private readonly findProductsByIdsService: FindProductsByIds

  @UseGuards(JwtGuard, RolesGuard)
  @HasRoles(RoleEnum.ADMIN, RoleEnum.MANAGER)
  @Query(() => [ProductsUnion])
  async findAll(): Promise<ProductsOutput[]> {
    return await this.findAllProducts.execute()
  }

  @Query(() => [ProductsUnion])
  async findByIds(
    @Args('input', { type: () => [String] }) input: string[]
  ): Promise<ProductsOutput[]> {
    return await this.findProductsByIdsService.execute({
      ids: input
    })
  }

  @Mutation(() => String)
  async assignCategoriesToProduct(
    @Args('input') input: AssignCategoriesToProductInputApi
  ) {
    await this.assignCategoriesToProductService.execute(input)
    return 'Assigned succefully'
  }
}
