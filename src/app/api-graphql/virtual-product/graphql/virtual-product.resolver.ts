import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { VirtualProductObject } from './virtual-product.object'
import { VirtualProductInput } from './virtual-product.input'
import { Inject } from '@nestjs/common'
import { CreateAVirtualProductService } from 'src/core/artifacts/virtual-product/service/create-a-virtual-product.service'

@Resolver(() => VirtualProductObject)
export class VirtualProductResolver {
  @Inject() private readonly createAVirtualProduct: CreateAVirtualProductService

  @Mutation(() => VirtualProductObject)
  async createVirtualProduct(@Args('input') input: VirtualProductInput) {
    return await this.createAVirtualProduct.execute(input)
  }
}
