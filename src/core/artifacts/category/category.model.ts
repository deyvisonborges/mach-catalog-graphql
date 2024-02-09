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

  changeName(name: string) {
    this.name = name
  }

  changeDescription(description: string) {
    this.description = description
  }

  static create(props: CategoryModelProps): CategoryModel {
    delete props.id
    const category = new CategoryModel(props)
    return category
  }
}
