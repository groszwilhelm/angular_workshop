import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Product } from "../../product-list/product/product.model";
import { Observable, combineLatest, Subject } from "rxjs";
import { shareReplay, map, tap, mergeMap } from "rxjs/operators";
import { CategoriesService } from "./categories.service";
import { products } from "src/app/product-list";

@Injectable()
export class ProductApiService {
  readonly api = "/api/products";

  products$: Observable<Product[]> = this.http.get<Product[]>(this.api);
  selectedProductId$: Subject<number> = new Subject();

  productsWithCategories$ = combineLatest(
    this.products$,
    this.categoriesService.categories$
  ).pipe(
    map(([products, categories]: [Product[], any]) => {
      return products.map(product => ({
        ...product,
        category: categories.find(cat => cat.id === product.category).title
      }));
    })
  );

  selectedProduct$: Observable<Product> = combineLatest(
    this.productsWithCategories$,
    this.selectedProductId$
  ).pipe(
    tap(data => console.log(data)),
    map(([products, selectedProductId]: [Product[], number]) =>
      products.find(prod => prod.id === selectedProductId)
    )
  );

  productsWithSuppliers$ = this.productsWithCategories$
    .pipe(
      mergeMap(products => products.map(product => product)),
      tap(payload => console.log(payload)),
      mergeMap(product => 
        this.http.get(`/api/suppliers/${product.supplierId}`)
        .pipe(
          map(supplier => ({
            ...product,
            supplier: supplier.title
          }))
        )
      )
    )
      .subscribe(console.log);

  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService
  ) {}

  changeProduct(productId: number) {
    this.selectedProductId$.next(productId);
  }
}
