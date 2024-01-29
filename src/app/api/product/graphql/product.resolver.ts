import { Resolver, Query } from '@nestjs/graphql'
import { ProductsUnion } from './product.union'
import { Inject } from '@nestjs/common'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'

@Resolver(() => ProductsUnion)
export class ProductResolver {
  @Inject() private readonly findAllProducts: FindAllProductsService

  @Query(() => [ProductsUnion])
  async findAll(): Promise<Array<typeof ProductsUnion>> {
    return await this.findAllProducts.execute()
  }
}
