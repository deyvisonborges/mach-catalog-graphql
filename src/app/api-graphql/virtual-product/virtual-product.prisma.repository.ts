import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { VirtualProductRepositoryContract } from 'src/core/artifacts/virtual-product/repository/virtual-product.repository.contract'
import { VirtualProductRepositoryType } from 'src/core/artifacts/virtual-product/repository/virtual-product.repository.type.adapter'

@Injectable()
export class VirtualProductPrismaRepository
  implements VirtualProductRepositoryContract
{
  constructor(private readonly prismaService: PrismaService) {}

  async findByProductId(
    productId: string
  ): Promise<VirtualProductRepositoryType> {
    const result = await this.prismaService.virtualProduct.findFirst({
      where: { id: productId }
    })
    return result || null
  }

  async createOne(
    entity: VirtualProductRepositoryType
  ): Promise<VirtualProductRepositoryType> {
    return await this.prismaService.virtualProduct.create({
      data: entity
    })
  }

  createMany(
    entity: VirtualProductRepositoryType[]
  ): Promise<VirtualProductRepositoryType[]> {
    throw new Error('Method not implemented.')
  }

  update(entity: VirtualProductRepositoryType): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById(entityId: string): Promise<VirtualProductRepositoryType> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<VirtualProductRepositoryType[]> {
    return await this.prismaService.virtualProduct.findMany()
  }
}
