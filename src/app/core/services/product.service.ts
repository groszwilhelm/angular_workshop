import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../product-list/product/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductApiService {
  readonly api = '/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.api);
  }
}
