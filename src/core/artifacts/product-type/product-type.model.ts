import { BaseModel, BaseModelProps } from 'src/core/common/base/model.base'

export type ProductTypeModelProps = { name: string } & BaseModelProps

export class ProductTypeModel
  extends BaseModel
  implements ProductTypeModelProps
{
  name: string

  constructor(props: ProductTypeModelProps) {
    super(props)
    Object.assign(this, props)
  }

  create(props: ProductTypeModelProps): ProductTypeModelProps {
    return new ProductTypeModel(props)
  }
}
