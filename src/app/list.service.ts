import { Injectable } from '@angular/core';
import { Product } from './product.interface';
import { products } from './product-list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public getProducts(): Array<Product> {
    return products
      .map(product => ({ ...product }));
  }
}
