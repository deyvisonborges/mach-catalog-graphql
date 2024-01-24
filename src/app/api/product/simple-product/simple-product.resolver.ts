import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { SimpleProductService } from './simple-product.service'
import { SimpleProduct } from './entities/simple-product.entity'
import { CreateSimpleProductInput } from './dto/create-simple-product.input'
import { UpdateSimpleProductInput } from './dto/update-simple-product.input'

@Resolver(() => SimpleProduct)
export class SimpleProductResolver {
  constructor(private readonly simpleProductService: SimpleProductService) {}

  @Mutation(() => SimpleProduct)
  createSimpleProduct(
    @Args('createSimpleProductInput')
    createSimpleProductInput: CreateSimpleProductInput
  ) {
    return this.simpleProductService.create(createSimpleProductInput)
  }

  @Query(() => [SimpleProduct], { name: 'simpleProduct' })
  findAll() {
    return this.simpleProductService.findAll()
  }

  @Query(() => SimpleProduct, { name: 'simpleProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.simpleProductService.findOne(id)
  }

  @Mutation(() => SimpleProduct)
  updateSimpleProduct(
    @Args('updateSimpleProductInput')
    updateSimpleProductInput: UpdateSimpleProductInput
  ) {
    return this.simpleProductService.update(
      updateSimpleProductInput.id,
      updateSimpleProductInput
    )
  }

  @Mutation(() => SimpleProduct)
  removeSimpleProduct(@Args('id', { type: () => Int }) id: number) {
    return this.simpleProductService.remove(id)
  }
}
