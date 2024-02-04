import { Injectable } from '@nestjs/common'
import { ProductCategoryRepositoryContract } from './product-category.repository.contract'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { ProductCategoryRepositoryType } from './product-category.repository.type'

@Injectable()
export class ProductCategoryPrismaRepository
  implements ProductCategoryRepositoryContract
{
  constructor(private readonly prismaService: PrismaService) {}

  async findCategoriesByIds(
    categoriesIds: string[]
  ): Promise<[] | CategoryModelProps[]> {
    const categories = await this.prismaService.productCategory.findMany({
      where: { id: { in: [...categoriesIds] } },
      include: { category: true }
    })

    return categories.map(({ category }) => ({
      id: String(category.id),
      name: category.name,
      description: category.description
    }))
  }

  async findCategoriesByProductId(
    productId: string
  ): Promise<CategoryModelProps[]> {
    const productCategories = await this.prismaService.productCategory.findMany(
      { where: { productId }, include: { category: true } }
    )

    return productCategories.map(({ category }) => ({
      id: String(category.id),
      name: category.name,
      description: category.description
    }))
  }

  createOne(
    entity: ProductCategoryRepositoryType
  ): Promise<ProductCategoryRepositoryType> {
    throw new Error('Method not implemented.')
  }
  createMany(
    entity: ProductCategoryRepositoryType[]
  ): Promise<ProductCategoryRepositoryType[]> {
    throw new Error('Method not implemented.')
  }
  update(entity: ProductCategoryRepositoryType): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findById(entityId: string): Promise<ProductCategoryRepositoryType> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<ProductCategoryRepositoryType[]> {
    throw new Error('Method not implemented.')
  }
}
