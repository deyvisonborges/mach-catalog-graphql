import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq'
import { CreateASimpleProductServiceInputApi } from './inputs/create-simple-product.input'
import { SimpleProductOutput } from './simple-product.output'

@Resolver(() => SimpleProductOutput)
export class SimpleProductResolver {
  @Inject() private readonly createASimpleProduct: CreateASimpleProductService
  @Inject() private readonly findAllSimpleProducts: FindAllSimpleProductsService
  // @Inject() private amqpConnection: AmqpConnection

  @Mutation(() => SimpleProductOutput)
  async createSimpleProduct(
    @Args('input') input: CreateASimpleProductServiceInputApi
  ) {
    const result = await this.createASimpleProduct.execute(input)
    // await this.amqpConnection.publish('amq.direct', 'ProductCreated', result)
    return result
  }

  @Query(() => [SimpleProductOutput])
  async findAllSimpleProduct(): Promise<SimpleProductOutput[]> {
    return await this.findAllSimpleProducts.execute()
  }
}
