import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { SimpleProductObject } from './simple-product.object'
import { SimpleProductInput } from './simple-product.input'
import { CreateSimpleProductService } from 'src/core/artifacts/product/variants/virtual-product/service/create-simple-product.service'
import { Inject } from '@nestjs/common'

@Resolver(() => SimpleProductObject)
export class SimpleProductResolver {
  @Inject()
  private readonly createSimpleProductService: CreateSimpleProductService

  @Mutation(() => SimpleProductObject)
  async createSimpleProduct(
    @Args('createSimpleProductInput')
    createSimpleProductInput: SimpleProductInput
  ) {
    return await this.createSimpleProductService.execute(
      createSimpleProductInput
    )
  }
}
