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
    delete entity.id
    const category = await this.prismaService.category.create({
      data: {
        name: entity.name,
        description: entity.description
      }
    })
    return { ...category, id: String(category.id) }
  }

  createMany(entity: CategoryModelProps[]): Promise<CategoryModelProps[]> {
    throw new Error('Method not implemented.')
  }
  update(entity: CategoryModelProps): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.')
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
}
