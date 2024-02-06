import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { SimpleProductRepositoryContract } from 'src/core/artifacts/simple-product/repository/simple-product.repository.contract'
import { SimpleProductRepositoryTypeAdapter } from 'src/core/artifacts/simple-product/repository/simple-product.repository.type'

@Injectable()
export class SimpleProductPrismaRepository
  implements SimpleProductRepositoryContract
{
  constructor(private readonly prismaService: PrismaService) {}

  async findByProductId(
    productId: string
  ): Promise<SimpleProductRepositoryTypeAdapter> {
    const result = await this.prismaService.simpleProduct.findFirst({
      where: { productId: productId }
    })
    return result || null
  }

  async createOne(
    entity: SimpleProductRepositoryTypeAdapter
  ): Promise<SimpleProductRepositoryTypeAdapter> {
    return await this.prismaService.simpleProduct.create({
      data: entity
    })
  }

  async findAll(): Promise<SimpleProductRepositoryTypeAdapter[]> {
    return await this.prismaService.simpleProduct.findMany()
  }

  // async findByIds(
  //   productIds: string[]
  // ): Promise<SimpleProductRepositoryTypeAdapter[]> {
  //   const products = await this.prismaService.simpleProduct.findMany({
  //     where: {
  //       id: {
  //         in: productIds
  //       }
  //     }
  //   })

  //   return products
  // }
}
