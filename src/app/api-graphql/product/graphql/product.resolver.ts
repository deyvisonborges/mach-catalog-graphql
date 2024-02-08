import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductsUnion } from './product.union'
import { Inject, UseGuards } from '@nestjs/common'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductsOutput } from './products.output'
import { AssignCategoriesToProductInputApi } from './inputs/assign-categories-to-product.input'
import { AssignCategoriesToProductService } from 'src/core/artifacts/category/service/assign-categories-to-product.service'
import { AdminGuard } from 'src/app/guards/admin.guard'

@Resolver(() => ProductsUnion)
export class ProductResolver {
  @Inject() private readonly findAllProducts: FindAllProductsService
  @Inject()
  private readonly assignCategoriesToProductService: AssignCategoriesToProductService

  @UseGuards(AdminGuard)
  @Query(() => [ProductsUnion])
  async findAll(): Promise<ProductsOutput[]> {
    return await this.findAllProducts.execute()
  }

  @Mutation(() => String)
  async assignCategoriesToProduct(
    @Args('input') input: AssignCategoriesToProductInputApi
  ) {
    await this.assignCategoriesToProductService.execute(input)
    return 'Assigned succefully'
  }
}
