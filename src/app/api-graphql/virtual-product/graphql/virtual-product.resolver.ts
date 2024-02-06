import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { CreateAVirtualProductService } from 'src/core/artifacts/virtual-product/service/create-a-virtual-product.service'
import { VirtualProductOutput } from './virtual-product.output'
import { CreateAVirtualProductServiceInputApi } from './inputs/create-virtual-product.input'

@Resolver(() => VirtualProductOutput)
export class VirtualProductResolver {
  @Inject() private readonly createAVirtualProduct: CreateAVirtualProductService

  @Mutation(() => VirtualProductOutput)
  async createVirtualProduct(
    @Args('input') input: CreateAVirtualProductServiceInputApi
  ) {
    return await this.createAVirtualProduct.execute(input)
  }
}
