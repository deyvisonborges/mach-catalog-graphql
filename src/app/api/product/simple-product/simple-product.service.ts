import { Injectable } from '@nestjs/common'
import { CreateSimpleProductInput } from './dto/create-simple-product.input'
import { UpdateSimpleProductInput } from './dto/update-simple-product.input'

@Injectable()
export class SimpleProductService {
  create(createSimpleProductInput: CreateSimpleProductInput) {
    return 'This action adds a new simpleProduct'
  }

  findAll() {
    return `This action returns all simpleProduct`
  }

  findOne(id: number) {
    return `This action returns a #${id} simpleProduct`
  }

  update(id: number, updateSimpleProductInput: UpdateSimpleProductInput) {
    return `This action updates a #${id} simpleProduct`
  }

  remove(id: number) {
    return `This action removes a #${id} simpleProduct`
  }
}
