import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../product-list/product/product.model';
import { Observable, combineLatest } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { CategoriesService } from './categories.service';

@Injectable()
export class ProductApiService {
  readonly api = '/api/products';

  products$: Observable<Product[]> = this.http.get<Product[]>(this.api);

  productsWithCategories$ = combineLatest(this.products$, this.categoriesService.categories$)
  .pipe(
    map(([products, categories]: [Product[], any]) => {
      return products.map(product => ({
        ...product,
        category: categories.find(cat => cat.id === product.category).title
      }))
    }),
  );

  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService) {}

}
