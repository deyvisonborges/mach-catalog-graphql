import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ProductTypeObject } from './product-type.object'
import { ProductTypeInput } from './product-type.input'
import { Inject } from '@nestjs/common'
import { CreateProductTypeService } from 'src/core/artifacts/product-type/service/create-product-type.service'

@Resolver(() => ProductTypeObject)
export class ProductTypeResolver {
  @Inject() private readonly createProductTypeService: CreateProductTypeService

  @Mutation(() => ProductTypeObject)
  async createProductType(@Args('input') input: ProductTypeInput) {
    return await this.createProductTypeService.execute(input)
  }
}
