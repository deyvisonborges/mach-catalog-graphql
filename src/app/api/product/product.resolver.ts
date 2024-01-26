import { Resolver, Query } from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductObject } from './product.object'

@Resolver(() => ProductObject)
export class ProductResolver {
  @Inject()
  private readonly findAllProductsService: FindAllProductsService

  @Query(() => [ProductObject])
  async findAll() {
    return await this.findAllProductsService.execute()
  }
}
