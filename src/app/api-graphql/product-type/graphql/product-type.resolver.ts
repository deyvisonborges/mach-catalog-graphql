import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ProductTypeOutput } from './product-type.output'
import { Inject } from '@nestjs/common'
import { CreateProductTypeService } from 'src/core/artifacts/product-type/service/create-product-type.service'
import { CreateProductTypeInputApi } from './inputs/create-product-type.input'

@Resolver(() => ProductTypeOutput)
export class ProductTypeResolver {
  @Inject() private readonly createProductTypeService: CreateProductTypeService

  @Mutation(() => ProductTypeOutput)
  async createProductType(@Args('input') input: CreateProductTypeInputApi) {
    return await this.createProductTypeService.execute(input)
  }
}
