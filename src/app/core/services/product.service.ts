import { Injectable } from '@angular/core';

import { products } from '../../product-list';
import { Product } from '../../product.model';

@Injectable()
export class ProductService {
  private products: Array<Product> = products;

  getProducts(): Array<Product> {
    return this.products.slice();
  }
}
