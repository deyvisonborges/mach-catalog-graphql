import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'

abstract class Product__InterfaceProduct {
  name: string
  description: string
}

class SimpleProduct__ConcrectProduct extends Product__InterfaceProduct {}
class VirtualProduct__ConcretProduct extends Product__InterfaceProduct {}

abstract class ProductFactoryCreator {
  abstract createProduct(type: ProductTypeConstant): Product__InterfaceProduct
}

class ProductConcrectProductFactory extends ProductFactoryCreator {
  createProduct(type: ProductTypeConstant): Product__InterfaceProduct {
    switch (type) {
      case `SIMPLE_PRODUCT`:
        return new SimpleProduct__ConcrectProduct()
    }
  }
}
