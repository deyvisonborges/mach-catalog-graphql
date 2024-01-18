import { ProductModel } from './product.model';

export class SimpleProduct extends ProductModel {
  create(): this {
    throw new Error('Method not implemented.');
  }
}
