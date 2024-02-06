import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'

import { ProductRepositoryContract } from 'src/core/artifacts/product/repository/product.repository.contract'
import { ProductRepositoryTypeAdapter } from 'src/core/artifacts/product/repository/product.repository.type.adapter'

@Injectable()
export class ProductPrismaRepository implements ProductRepositoryContract {
  constructor(private readonly prismaService: PrismaService) {}
  createMany(
    entity: ProductRepositoryTypeAdapter[]
  ): Promise<ProductRepositoryTypeAdapter[]> {
    throw new Error('Method not implemented.')
  }
  update(entity: ProductRepositoryTypeAdapter): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById(entityId: string): Promise<ProductRepositoryTypeAdapter> {
    const product = await this.prismaService.product.findFirst({
      where: { id: entityId }
    })
    return product
  }

  async findProductBySku(sku: string): Promise<ProductRepositoryTypeAdapter> {
    const product = await this.prismaService.product.findFirst({
      where: { sku: sku }
    })
    return product || null
  }

  async createOne(
    entity: ProductRepositoryTypeAdapter
  ): Promise<ProductRepositoryTypeAdapter> {
    return await this.prismaService.product.create({
      data: {
        costPrice: entity.costPrice,
        description: entity.description,
        name: entity.name,
        promotionalPrice: entity.promotionalPrice,
        salePrice: entity.salePrice,
        sku: entity.sku,
        thumbnail: entity.thumbnail,
        id: entity.id,
        productTypeId: entity.productTypeId
      }
    })
  }

  async findAll(): Promise<ProductRepositoryTypeAdapter[]> {
    return await this.prismaService.product.findMany()
  }
}
