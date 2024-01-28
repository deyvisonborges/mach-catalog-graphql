import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductsUnion } from './product.union'
import { Inject } from '@nestjs/common'
import { FindAllProductsService } from 'src/core/artifacts/product/service/find-all-products.service'
import { SimpleProductObject } from './objects/simple-product.object'
import { SimpleProductInput } from './inputs/simple-product.input'
import { CreateASimpleProductService } from 'src/core/artifacts/simple-product/service/create-a-simple-product.service'
import { FindAllSimpleProductsService } from 'src/core/artifacts/simple-product/service/find-all-simple-products.service'
import { VirtualProductObject } from './objects/virtual-product.object'
import { VirtualProductInput } from './inputs/virtual-product.input'
import { CreateAVirtualProductService } from 'src/core/artifacts/virtual-product/service/create-a-virtual-product.service'

@Resolver(() => ProductsUnion)
export class ProductResolver {
  @Inject()
  private readonly findAllProducts: FindAllProductsService

  @Inject() private readonly findAllSimpleProducts: FindAllSimpleProductsService

  @Inject() private readonly createASimpleProduct: CreateASimpleProductService
  @Inject() private readonly createAVirtualProduct: CreateAVirtualProductService

  @Query(() => [ProductsUnion])
  async findAll(): Promise<Array<typeof ProductsUnion>> {
    return await this.findAllProducts.execute()
  }

  @Mutation(() => SimpleProductObject)
  async createSimpleProduct(@Args('input') input: SimpleProductInput) {
    return await this.createASimpleProduct.execute(input)
  }

  @Query(() => [SimpleProductObject])
  async findAllSimpleProduct(): Promise<SimpleProductObject[]> {
    return await this.findAllSimpleProducts.execute()
  }

  @Mutation(() => VirtualProductObject)
  async createVirtualProduct(@Args('input') input: VirtualProductInput) {
    return await this.createAVirtualProduct.execute(input)
  }
}
