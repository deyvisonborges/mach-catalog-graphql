import { CreateASimpleProductService } from '../artifacts/simple-product/service/create-a-simple-product.service'

export const domainsEventsConfig = {
  [CreateASimpleProductService.name]: {
    exchange: 'amq.direct',
    routingKey: CreateASimpleProductService.name
  }
}
