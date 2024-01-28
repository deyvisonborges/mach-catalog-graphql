import { BaseServiceContract } from 'src/core/common/base/service.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from '../repository/simple-product.repository.contract'

type Output = SimpleProductModelProps[]

export class FindAllSimpleProductsService
  implements BaseServiceContract<void, Output>
{
  constructor(private readonly repository: SimpleProductRepositoryContract) {}

  async execute(): Promise<Output> {
    return await this.repository.findAll()
  }
}
