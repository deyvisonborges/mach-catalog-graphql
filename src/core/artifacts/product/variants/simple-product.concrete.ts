import { ProductContract, ProductContractProps } from '../product.contract'

export type SimpleProductProps = {
  size: string
  weight: number
  material: string
} & ProductContractProps

export class SimpleProduct extends ProductContract<SimpleProductProps> {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  size: string
  weight: number
  material: string

  constructor(props: SimpleProductProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: SimpleProductProps): SimpleProductProps {
    return new SimpleProduct(props)
  }
}
