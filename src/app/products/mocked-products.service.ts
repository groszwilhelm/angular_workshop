import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { products } from './product-list';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class MockedProductsService {
  getProducts(): Array<Product> {
    return products;
  }
}
