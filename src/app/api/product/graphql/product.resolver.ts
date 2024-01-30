import { Resolver, Query } from '@nestjs/graphql'
import { ProductsUnion } from './product.union'
import { Inject } from '@nestjs/common'
import {
  FindAllProductsService,
  FindAllProductsServiceOutput
} from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductsOutput } from './products.output'

@Resolver(() => ProductsUnion)
export class ProductResolver {
  @Inject() private readonly findAllProducts: FindAllProductsService

  @Query(() => [ProductsUnion])
  async findAll(): Promise<ProductsOutput[]> {
    return await this.findAllProducts.execute()
  }
}
