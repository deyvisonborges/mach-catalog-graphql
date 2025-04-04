import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { VirtualProductRepositoryContract } from 'src/core/artifacts/virtual-product/repository/virtual-product.repository.contract'
import { VirtualProductRepositoryTypeAdapter } from 'src/core/artifacts/virtual-product/repository/virtual-product.repository.type.adapter'

@Injectable()
export class VirtualProductPrismaRepository
  implements VirtualProductRepositoryContract
{
  constructor(private readonly prismaService: PrismaService) {}

  async findByProductId(
    productId: string
  ): Promise<VirtualProductRepositoryTypeAdapter> {
    const result = await this.prismaService.virtualProduct.findFirst({
      where: { id: productId }
    })
    return result || null
  }

  async createOne(
    entity: VirtualProductRepositoryTypeAdapter
  ): Promise<VirtualProductRepositoryTypeAdapter> {
    return await this.prismaService.virtualProduct.create({
      data: entity
    })
  }

  async findAll(): Promise<VirtualProductRepositoryTypeAdapter[]> {
    return await this.prismaService.virtualProduct.findMany()
  }
}
