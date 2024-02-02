import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { SimpleProductObject } from './simple-product.object'
import { SimpleProductInput } from './simple-product.input'
import { Inject } from '@nestjs/common'
import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq'

@Resolver(() => SimpleProductObject)
export class SimpleProductResolver {
  @Inject() private readonly createASimpleProduct: CreateASimpleProductService
  @Inject() private readonly findAllSimpleProducts: FindAllSimpleProductsService
  @Inject() private amqpConnection: AmqpConnection

  @Mutation(() => SimpleProductObject)
  async createSimpleProduct(@Args('input') input: SimpleProductInput) {
    const result = await this.createASimpleProduct.execute(input)
    await this.amqpConnection.publish('amq.direct', 'ProductCreated', result)
    return result
  }

  @Query(() => [SimpleProductObject])
  async findAllSimpleProduct(): Promise<SimpleProductObject[]> {
    return await this.findAllSimpleProducts.execute()
  }
}
