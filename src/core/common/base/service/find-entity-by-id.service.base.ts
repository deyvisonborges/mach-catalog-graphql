// // TODO
// /**
//  * Criar logica para construcao de servicos de forma generica
//  */

// // import { BaseServiceContract } from 'src/core/common/base/service.base'
// // import { BaseRepositoryContract } from '../repository.contract.base'
// // // import { BaseRepositoryContract } from '../repository.contract.base'

// // // Interface genérica para o contrato do repositório
// // export interface RepositoryContract<T> {
// //   delete(id: string): Promise<void>
// // }

// // // // Interface genérica para o contrato do repositório
// // // export interface RepositoryContract<T><
// // //   T extends BaseRepositoryContract<null>['delete']
// // // > {}

// // // Tipo genérico para a entrada da operação de exclusão
// // export type FindEntityServiceBaseInput<T> = { id: string }

// // // Serviço base genérico
// // export class FindEntityByIdBaseService<T>
// //   implements BaseServiceContract<FindEntityServiceBaseInput<T>, void>
// // {
// //   constructor(
// //     private readonly repository: BaseRepositoryContract<T>['findById']
// //   ) {}

// //   async execute(input: FindEntityServiceBaseInput<T>): Promise<void> {
// //     await this.repository.delete(input.id)
// //   }
// // }

// import { BaseServiceContract } from 'src/core/common/base/service.base';

// // Interface genérica para o contrato do repositório
// export interface RepositoryContract<T> {
//   delete(id: string): Promise<void>;
//   // Adicione outros métodos do repositório, se necessário
// }

// // Tipo genérico para a entrada da operação de exclusão
// export type DeleteEntityByIdInput<T> = { id: string };

// // Classe abstrata genérica
// export abstract class DeleteEntityByIdService<T> implements BaseServiceContract<DeleteEntityByIdInput<T>, void> {
//   constructor(protected readonly repository: RepositoryContract<T>) {}

//   // Método abstrato que deve ser implementado pelas classes filhas
//   abstract mapInputToEntity(input: DeleteEntityByIdInput<T>): T;

//   async execute(input: DeleteEntityByIdInput<T>): Promise<void> {
//     const entity = this.mapInputToEntity(input);
//     await this.repository.delete(entity.id);
//   }
// }

// import { ProductRepositoryContract } from '../repositories/product.repository.contract';
// import { DeleteEntityByIdService, RepositoryContract, DeleteEntityByIdInput } from './delete-entity-by-id.service';

// // Defina a interface do repositório específico para produtos
// interface Product {
//   // Defina os campos específicos do produto
//   id: string;
//   // ...
// }

// // Estenda a classe abstrata para criar um serviço específico para produtos
// export class DeleteProductByIdService extends DeleteEntityByIdService<Product> {
//   constructor(private readonly productRepository: ProductRepositoryContract) {
//     super(productRepository);
//   }

//   // Implemente o método abstrato
//   mapInputToEntity(input: DeleteEntityByIdInput<Product>): Product {
//     return { id: input.id };
//   }

//   // Se necessário, adicione métodos específicos para o serviço de exclusão de produtos
// }
