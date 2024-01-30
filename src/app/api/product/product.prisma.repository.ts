import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'

import { ProductRepositoryContract } from 'src/core/artifacts/product/repository/product.repository.contract'

@Injectable()
export class ProductPrismaRepository implements ProductRepositoryContract {
  constructor(private readonly prismaService: PrismaService) {}

  async findProductBySku(sku: string): Promise<ProductModelProps> {
    const product = await this.prismaService.product.findFirst({
      where: { sku: sku }
    })
    return product || null
  }

  async createOne(entity: ProductModelProps): Promise<ProductModelProps> {
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

  async findAll(): Promise<ProductModelProps[]> {
    return await this.prismaService.product.findMany({
      include: { productType: true }
    })
  }

  createMany(entity: ProductModelProps[]): Promise<ProductModelProps[]> {
    throw new Error('Method not implemented.')
  }

  update(entity: ProductModelProps): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findById(entityId: string): Promise<ProductModelProps> {
    throw new Error('Method not implemented.')
  }
}
