import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductTypeRepositoryContract } from 'src/core/artifacts/product-type/repository/product-type.repository.contract'

@Injectable()
export class ProductTypePrismaRepository
  implements ProductTypeRepositoryContract
{
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(
    entity: ProductTypeModelProps
  ): Promise<ProductTypeModelProps> {
    return await this.prismaService.productType.create({
      data: entity
    })
  }

  async findByName(name: string): Promise<ProductTypeModelProps> {
    const productType = await this.prismaService.productType.findFirst({
      where: { name: name }
    })

    return productType || null
  }

  async findById(entityId: string): Promise<ProductTypeModelProps> {
    const productType = await this.prismaService.productType.findFirst({
      where: { id: entityId }
    })
    return productType || null
  }

  async findAll(): Promise<ProductTypeModelProps[]> {
    return await this.prismaService.productType.findMany()
  }
}
