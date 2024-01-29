import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductTypeModelProps } from '../product-type.model'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductTypeRepositoryContract } from '../repository/product-type.repository.contract'
import { HttpException, HttpStatus } from '@nestjs/common'

type Input = Omit<ProductTypeModelProps, keyof BaseModelProps>
type Output = ProductTypeModelProps

export class CreateProductTypeService
  implements BaseServiceContract<Input, Output>
{
  constructor(private readonly repository: ProductTypeRepositoryContract) {}

  async execute(input: Input): Promise<Output> {
    const exists = await this.repository.findByName(input.name)

    if (exists)
      throw new HttpException(
        { message: 'Product type already exists' },
        HttpStatus.BAD_REQUEST
      )

    return await this.repository.createOne(input)
  }
}
