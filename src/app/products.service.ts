import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { products } from './product-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Array<Product> {
    return products;
  }
}
