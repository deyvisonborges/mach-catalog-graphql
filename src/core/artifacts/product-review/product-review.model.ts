import { BaseModel, BaseModelProps } from 'src/core/common/base/model.base'

export type ProductReviewProps = {
  title: string
  comment: string
  rating: number
  productId: string
  userId?: string
} & BaseModelProps

export class ProductReview extends BaseModel implements ProductReviewProps {
  title: string
  comment: string
  rating: number
  productId: string
  userId?: string

  constructor(props: ProductReviewProps) {
    super(props)
    this.validateRating(props.rating)
    Object.assign(this, props)
  }

  private validateRating(rating: number) {
    if (rating < 0 || rating > 5) {
      throw new Error('Bad Request', { cause: 'Invalid rate value' })
    }
  }
}
