// /* eslint-disable @typescript-eslint/no-empty-interface */
// // Define uma interface base para a configuração de produtos
// interface ProductConfig {}

// // Define uma classe abstrata para representar um modelo de produto
// abstract class ProductModel {
//   constructor(public config: ProductConfig) {}
//   abstract create(config: ProductConfig): ProductModel
//   // Adicione outros métodos necessários aqui
// }

// // Implementa a classe concreta para produtos simples
// class SimpleProductModel extends ProductModel {
//   size: string
//   constructor(config: SimpleProductConfig) {
//     super(config)
//     this.size = config.size
//     // Implementação específica para produtos simples
//   }
//   create(config: SimpleProductConfig): SimpleProductModel {
//     return new SimpleProductModel(config)
//   }
//   // Implementa outros métodos necessários aqui
// }

// // Implementa a classe concreta para produtos virtuais
// class VirtualProductModel extends ProductModel {
//   constructor(config: VirtualProductConfig) {
//     super(config)
//     // Implementação específica para produtos virtuais
//   }
//   create(config: VirtualProductConfig): VirtualProductModel {
//     return new VirtualProductModel(config)
//   }
//   // Implementa outros métodos necessários aqui
// }

// // Define a configuração específica para produtos simples
// interface SimpleProductConfig extends ProductConfig {
//   size: string
// }

// // Define a configuração específica para produtos virtuais
// type VirtualProductConfig = ProductConfig

// // Define a classe da fábrica de produtos
// export class ProductFactory {
//   static createProduct(
//     type: 'simple' | 'virtual',
//     config: SimpleProductConfig | VirtualProductConfig
//   ): ProductModel {
//     if (type === 'simple') {
//       return new SimpleProductModel(config as SimpleProductConfig)
//     } else if (type === 'virtual') {
//       return new VirtualProductModel(config as VirtualProductConfig)
//     } else {
//       throw new Error('Tipo de produto inválido')
//     }
//   }
// }

// const a = ProductFactory.createProduct('simple', {
//   size: "'"
// })
