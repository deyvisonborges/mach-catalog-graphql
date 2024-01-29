import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { SimpleProductObject } from './simple-product.object'
import { SimpleProductInput } from './simple-product.input'
import { Inject } from '@nestjs/common'
import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'

@Resolver(() => SimpleProductObject)
export class SimpleProductResolver {
  @Inject() private readonly createASimpleProduct: CreateASimpleProductService
  @Inject() private readonly findAllSimpleProducts: FindAllSimpleProductsService

  @Mutation(() => SimpleProductObject)
  async createSimpleProduct(@Args('input') input: SimpleProductInput) {
    return await this.createASimpleProduct.execute(input)
  }

  @Query(() => [SimpleProductObject])
  async findAllSimpleProduct(): Promise<SimpleProductObject[]> {
    return await this.findAllSimpleProducts.execute()
  }
}
