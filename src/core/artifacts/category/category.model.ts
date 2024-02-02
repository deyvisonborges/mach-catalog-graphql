import { BaseModel, BaseModelProps } from '../../../core/common/base/model.base'

export type CategoryModelProps = {
  name: string
  description: string | null
} & BaseModelProps

export class CategoryModel extends BaseModel implements CategoryModelProps {
  name: string
  description: string

  constructor(props: CategoryModelProps) {
    super(props)
    Object.assign(this, props)
  }

  static create(props: CategoryModelProps): CategoryModel {
    const category = new CategoryModel(props)
    return category
  }
}
