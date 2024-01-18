import { BaseModelProps } from 'src/core/common/base/model.base';

export type ProductConstantTypes =
  | 'SIMPLE_PRODUCT'
  | 'CONFIGURABLE_PRODUCT'
  | 'GROUPED_PRODUCT'
  | 'VIRTUAL_PRODUCT'
  | 'BUNDLE_PRODUCT'
  | 'DOWNLOADABLE_PRODUCT'
  | 'GITF_CARD';

export type ProductModelProps = {
  name: string;
  description: string;
  sku: string;
  salePrice: number;
  costPrice: number;
  promotionalPrince: number;
  thumbnail: string;
  type: ProductConstantTypes;
} & BaseModelProps;

export abstract class ProductModel implements ProductModelProps {
  name: string;
  description: string;
  sku: string;
  salePrice: number;
  costPrice: number;
  promotionalPrince: number;
  thumbnail: string;
  type: ProductConstantTypes;

  constructor(props: ProductModelProps) {
    Object.assign(props);
  }

  abstract create(): this;
}
