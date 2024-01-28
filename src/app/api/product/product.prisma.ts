import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma/prisma.service'
import { Product } from '@prisma/client'
import { UUID } from 'src/core/common/valueobjects/uuid.vo'

@Injectable()
export class ProductPrisma {
  constructor(private readonly prisma: PrismaService) {}

  async createType() {
    return await this.prisma.productType.create({
      data: {
        name: 'SIMPLE_PRODUCT'
      }
    })
  }

  async create(payload: Product) {
    const productType = await this.prisma.productType.findFirst({
      where: { id: payload.productTypeId }
    })

    if (!productType) {
      throw new Error('Invalid product type')
    }
  }

  async createSimpleProduct() {
    const product = await this.prisma.product.create({
      data: {
        description: 'some description',
        name: 'some name',
        id: new UUID().get(),
        sku: 'some sku',
        thumbnail: 'some thumbnail',
        productTypeId: '5b070d1d-9fe2-4799-8ae4-262d3a0507d8',
        costPrice: 10,
        promotionalPrice: 10,
        salePrice: 10
      }
    })
    await this.prisma.simpleProduct.create({
      data: {
        material: '',
        size: '',
        weight: 12,
        product: { connect: { id: product.id } }
      }
    })
    await this.prisma.virtualProduct.create({
      data: {
        downloadLink: 'meu link',
        product: {
          create: {
            description: 'some description',
            name: 'some name',
            id: new UUID().get(),
            sku: 'some sku',
            thumbnail: 'some thumbnail',
            productTypeId: '792915a7-cfd8-4c2a-a200-0f066f747da2',
            costPrice: 10,
            promotionalPrice: 10,
            salePrice: 10
          }
        }
      }
    })
  }

  async findAll() {
    const [products, productSimple, productType] = await Promise.all([
      this.prisma.product.findMany(),
      this.prisma.simpleProduct.findMany(),
      this.prisma.productType.findMany()
    ])

    const productsAndTypes = products.map(product => {
      const type = productType.find(p => p.id === product.productTypeId)
      const simpleProduct = productSimple.find(p => p.productId === product.id)

      return {
        ...product,
        type: type ? type.name : '',
        ...(simpleProduct && {
          weight: simpleProduct.weight,
          material: simpleProduct.material,
          size: simpleProduct.size
        })
      }
    })

    console.log(productsAndTypes)
    return productsAndTypes
  }
}
