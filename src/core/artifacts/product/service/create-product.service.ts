import { BaseServiceContract } from 'src/core/common/base/service.base'

export class CreateProduct implements BaseServiceContract<null, null> {
  execute(input: null): Promise<null> {
    throw new Error('Method not implemented.')
  }
}
