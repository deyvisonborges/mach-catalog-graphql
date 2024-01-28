import { BaseServiceContract } from 'src/core/common/base/service.base'
import { VirtualProductModelProps } from '../virtual-product.model'
import { VirtualProductRepositoryContract } from '../repository/virtual-product.repository.contract'

type Output = VirtualProductModelProps[]

export class FindAllVirtualProductsService
  implements BaseServiceContract<void, Output>
{
  constructor(private readonly repository: VirtualProductRepositoryContract) {}

  async execute(): Promise<Output> {
    return await this.repository.findAll()
  }
}
