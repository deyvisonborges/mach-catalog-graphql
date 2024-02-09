import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { CategoryRepositoryContract } from 'src/core/artifacts/category/repository/category.repository.contract'

@Injectable()
export class CategoryPrismaRepository implements CategoryRepositoryContract {
  constructor(private readonly prismaService: PrismaService) {}

  async getValidCategoriesByIds(
    ids: string[]
  ): Promise<CategoryModelProps[] | []> {
    const categories = (await this.prismaService.category.findMany()).map(
      category => ({ ...category, id: String(category.id) })
    )
    return categories.filter(category => ids.includes(category.id))
  }

  async createOne(entity: CategoryModelProps): Promise<CategoryModelProps> {
    const category = await this.prismaService.category.create({
      data: {
        name: entity.name,
        description: entity.description
      }
    })
    return { ...category, id: String(category.id) }
  }

  async delete(entityId: string): Promise<void> {
    await this.prismaService.category.delete({
      where: { id: Number(entityId) }
    })
  }

  async findById(entityId: string): Promise<CategoryModelProps> {
    const category = await this.prismaService.category.findFirst({
      where: { id: Number(entityId) }
    })

    return category ? { ...category, id: String(category.id) } : null
  }

  async findAll(): Promise<CategoryModelProps[]> {
    const categories = await this.prismaService.category.findMany()
    return categories.map(category => ({
      ...category,
      id: String(category.id)
    }))
  }

  async update(entity: CategoryModelProps): Promise<void> {
    await this.prismaService.category.update({
      data: {
        name: entity.name,
        description: entity.description,
        updatedAt: new Date()
      },
      where: { id: Number(entity.id) }
    })
  }
}
