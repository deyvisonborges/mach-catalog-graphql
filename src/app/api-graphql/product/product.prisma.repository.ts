import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { ProductRepositoryContract } from 'src/core/artifacts/product/repository/product.repository.contract'
import { ProductRepositoryTypeAdapter } from 'src/core/artifacts/product/repository/product.repository.type.adapter'

@Injectable()
export class ProductPrismaRepository implements ProductRepositoryContract {
  constructor(private readonly prismaService: PrismaService) {}

  async findByIds(
    productIds: string[]
  ): Promise<ProductRepositoryTypeAdapter[]> {
    const products = await this.prismaService.product.findMany({
      where: {
        id: {
          in: productIds
        }
      }
    })

    return products
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
      data: entity
    })
  }

  async findAll(): Promise<ProductRepositoryTypeAdapter[]> {
    return await this.prismaService.product.findMany()
  }
}
