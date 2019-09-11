import { Action } from '@ngrx/store';
import { Product } from '../product/product.model';

export const LOAD_PRODUCTS = '[Products] Load products';
export const LOAD_PRODUCTS_COMPLETED = '[Products] Load products completed';
export const LOAD_PRODUCTS_ERROR = '[Products] Load products error';

export class LoadProduct implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductCompleted implements Action {
  readonly type = LOAD_PRODUCTS_COMPLETED;

  constructor(public payload: Array<Product>) {}
}

export class LoadProductError implements Action {
  readonly type = LOAD_PRODUCTS_ERROR;

  constructor(public payload: any) { }
}

export type ProductActions =
  | LoadProduct
  | LoadProductCompleted
  | LoadProductError;
