import { Injectable } from '@angular/core';

import { products } from '../../product-list';
import { Product } from '../../product-list/product/product.model';

@Injectable()
export class ProductApiService {
  private products: Array<Product> = products;

  getProducts(): Array<Product> {
    return this.products.slice();
  }
}
