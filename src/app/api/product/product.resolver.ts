import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ProductUnion, CreateProductInput } from './product.inputs'
import { Inject } from '@nestjs/common'
import { CreateProductService } from 'src/core/artifacts/product/service/create-product.service'
import { ProductCreator } from 'src/core/artifacts/product/product.creator'

@Resolver(() => ProductUnion)
export class ProductResolver {
  @Inject()
  private readonly createProductService: CreateProductService

  @Mutation(() => ProductUnion)
  createProduct(@Args('input') input: CreateProductInput) {
    const product = new ProductCreator().createProduct({
      ...input.simpleProduct,
      ...input.virtualProduct
    })
    return this.createProductService.execute(product)
  }
}
