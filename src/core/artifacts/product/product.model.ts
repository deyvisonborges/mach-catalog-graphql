import { BaseModelProps } from 'src/core/common/base/model.base'

export type ProductModelProps = {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
} & BaseModelProps

/**
 * @description
 * Nesse modelo, eu posso receber o tipo do produto especialista porém, eu não obrigo a passar
 * como informação para essa classe, por isso uso o modo abaixo, para pode garantir que vou
 * estender as configurácoes iniciais do produto e fazer um merge com as props do produto
 * que for passado como generic.
 * ```ts
 * export abstract class ProductModel<T extends ProductModelProps = ProductModelProps> {}
 * ```
 */
export abstract class ProductModel<T extends ProductModelProps>
  implements ProductModelProps
{
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string

  constructor(props: T) {
    Object.assign(this, props)
  }

  // Simple contract to implemento Factory Method
  abstract create(): T
}
