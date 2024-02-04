import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { SimpleProductRepositoryContract } from 'src/core/artifacts/simple-product/repository/simple-product.repository.contract'
import { SimpleProductRepositoryType } from 'src/core/artifacts/simple-product/repository/simple-product.repository.type'

@Injectable()
export class SimpleProductPrismaRepository
  implements SimpleProductRepositoryContract
{
  constructor(private readonly prismaService: PrismaService) {}

  async findByProductId(
    productId: string
  ): Promise<SimpleProductRepositoryType> {
    const result = await this.prismaService.simpleProduct.findFirst({
      where: { productId: productId }
    })
    return result || null
  }

  async createOne(
    entity: SimpleProductRepositoryType
  ): Promise<SimpleProductRepositoryType> {
    return await this.prismaService.simpleProduct.create({
      data: entity
    })
  }
  createMany(
    entity: SimpleProductRepositoryType[]
  ): Promise<SimpleProductRepositoryType[]> {
    throw new Error('Method not implemented.')
  }
  update(entity: SimpleProductRepositoryType): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findById(entityId: string): Promise<SimpleProductRepositoryType> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<SimpleProductRepositoryType[]> {
    return await this.prismaService.simpleProduct.findMany()
  }
}
