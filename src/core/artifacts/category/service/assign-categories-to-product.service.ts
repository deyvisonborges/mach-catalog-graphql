import { BaseServiceContract } from 'src/core/common/base/service.base'
import { GetValidCategoriesByIdsService } from './get-valid-categories-by-ids.service'
import { ProductCategoryRepositoryContract } from 'src/core/common/repositories/product-category/product-category.repository.contract'
import { FindProductByIdService } from '../../product/service/find-product-by-id.service'
import { CategoryRepositoryContract } from '../repository/category.repository.contract'

export type AssignCategoriesToProductInput = {
  productId: string
  categoriesIds: string[]
}

export class AssignCategoriesToProductService
  implements BaseServiceContract<AssignCategoriesToProductInput, void>
{
  constructor(
    private readonly findProductByIdService: FindProductByIdService,
    private readonly getValidCategoriesByIdsService: GetValidCategoriesByIdsService,
    private readonly categoryRepository: CategoryRepositoryContract,
    private readonly productCategoryRepository: ProductCategoryRepositoryContract
  ) {}

  async execute(input: AssignCategoriesToProductInput) {
    const MAX_RETRIES = 3
    let retries = 0

    while (retries < MAX_RETRIES) {
      try {
        // encontra o produto com base no ID fornecido
        const product = await this.findProductByIdService.execute({
          id: input.productId
        })

        // valida as categorias com base nos IDs fornecidos
        const categories = await this.getValidCategoriesByIdsService.execute({
          categoriesIds: input.categoriesIds
        })

        // Verifica se todos os IDs fornecidos existem no repositório de categorias
        const allCategoriesExist = input.categoriesIds.every(categoryId =>
          categories.some(category => category.id === categoryId)
        )
        if (!allCategoriesExist) {
          throw new Error('IDs de categoria inválidos.')
        }

        // encontra as categorias existentes associadas ao produto
        const existingCategories =
          await this.productCategoryRepository.findCategoriesByProductId(
            product.id
          )

        // inicializa um array para armazenar os novos IDs de categorias
        const newCategoryIds: string[] = []

        // itera sobre as categorias válidas
        for (const category of categories) {
          // verifica se a categoria já está associada ao produto pelo id
          const categoryExists = existingCategories.some(
            existingCategory => existingCategory.id === category.id
          )

          // se a categoria não estiver associada, cria uma nova categoria e armazena o ID
          if (!categoryExists) {
            const newCategory = await this.categoryRepository.createOne(
              category
            )
            newCategoryIds.push(newCategory.id)
          }
        }

        // atribui as novas categorias ao produto
        await this.productCategoryRepository.assignCategoriesToProduct(
          product.id,
          newCategoryIds
        )
      } catch (error) {
        if (error.code === 'P2034') {
          retries++
          continue
        }
      }
    }
  }
}
