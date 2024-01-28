import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductTypeRepositoryContract } from '../repository/product-type.repository.contract'
import { ProductTypeModelProps } from '../product-type.model'

type Output = ProductTypeModelProps[]

export class FindAllProductTypesService
  implements BaseServiceContract<void, Output>
{
  constructor(private readonly repository: ProductTypeRepositoryContract) {}

  async execute(): Promise<Output> {
    return await this.repository.findAll()
  }
}
