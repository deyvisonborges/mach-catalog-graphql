import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductTypeModel, ProductTypeModelProps } from '../product-type.model'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductTypeRepositoryContract } from '../repository/product-type.repository.contract'
import { HttpException, HttpStatus } from '@nestjs/common'

export type CreateProductTypeServiceInput = Omit<
  ProductTypeModelProps,
  keyof BaseModelProps
>

type Output = ProductTypeModelProps

export class CreateProductTypeService
  implements BaseServiceContract<CreateProductTypeServiceInput, Output>
{
  constructor(private readonly repository: ProductTypeRepositoryContract) {}

  async execute(input: CreateProductTypeServiceInput): Promise<Output> {
    const exists = await this.repository.findByName(input.name)

    if (exists)
      throw new HttpException(
        { message: 'Product type already exists' },
        HttpStatus.BAD_REQUEST
      )

    const productType = ProductTypeModel.create(input)
    return await this.repository.createOne(productType)
  }
}
