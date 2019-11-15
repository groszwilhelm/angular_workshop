import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../product-list/product/product.model';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class ProductApiService {
  readonly api = '/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.api);
  }

  get404Products(): Observable<any> {
    return this.http.get<Array<Product>>('/api/unexisting');
  }

  private products$: Observable<Product[]>

  get products() {
    if(!this.products$) {
      this.products$ = this.getProducts().pipe(
        shareReplay(1)
      )
    }

    return this.products$;
  }

  reload() {
    this.products$ = null;
  }
}
