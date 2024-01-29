import { BaseModel, BaseModelProps } from 'src/core/common/base/model.base'
import { ProductTypeConstant } from '../product/product.constants'

export type ProductTypeModelProps = {
  name: ProductTypeConstant
} & BaseModelProps

export class ProductTypeModel
  extends BaseModel
  implements ProductTypeModelProps
{
  name: ProductTypeConstant

  constructor(props: ProductTypeModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: ProductTypeModelProps): ProductTypeModelProps {
    return new ProductTypeModel(props)
  }
}
