import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductModelPropsAdapter } from '../product.model.adapter'
import { FindProductByIdService } from './find-product-by-id.service'

type Input = { ids: string[] }
type Output = ProductModelPropsAdapter[]

export class FindProductsByIds implements BaseServiceContract<Input, Output> {
  constructor(
    private readonly findProductByIdService: FindProductByIdService
  ) {}

  async execute(input: Input): Promise<ProductModelPropsAdapter[]> {
    // Verifique se input é definido e se possui a propriedade ids
    if (!input || !input.ids) {
      throw new Error('Input is not defined or does not contain ids')
    }

    // Verifique se input.ids é uma matriz válida
    if (!Array.isArray(input.ids)) {
      throw new Error('Input.ids is not an array')
    }

    // Verifique se input.ids não está vazio
    if (input.ids.length === 0) {
      return [] // Retorna uma matriz vazia se não houver IDs
    }

    // Mapeie os IDs para executar a consulta do produto por ID para cada ID
    const result = await Promise.all(
      input.ids.map(id => this.findProductByIdService.execute({ id }))
    )
    return result
  }
}
