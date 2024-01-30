import { BaseServiceContract } from 'src/core/common/base/service.base'
import { SimpleProductModelProps } from '../simple-product.model'
import { SimpleProductRepositoryContract } from '../repository/simple-product.repository.contract'

type Output = SimpleProductModelProps[]

// TODO: ajustar o retorno do simple product find all
export class FindAllSimpleProductsService
  implements BaseServiceContract<void, Output>
{
  constructor(private readonly repository: SimpleProductRepositoryContract) {}

  async execute(): Promise<Output> {
    return null
  }
}
