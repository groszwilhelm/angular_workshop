import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Observable, combineLatest, Subject } from "rxjs";
import { tap, shareReplay, map, distinctUntilChanged } from "rxjs/operators";
import { Category, CategoriesService } from "../categories.service";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private productsURL = "http://localhost:3000/products";

  products$: Observable<Product[]> = this.http
    .get<Product[]>(this.productsURL)
    .pipe(
      tap(console.log),
      shareReplay()
    );

  productsWithCategories$: Observable<Product[]> = combineLatest(
    this.products$,
    this.categoriesService.categories$
  ).pipe(
    map(([products, categories]) =>
      products.map(product => ({
        ...product,
        category: categories.find(
          category => category.id === product.categoryId
        ).title
      }))
    ),
    tap(data => console.log('pwc: ', data))
  );

  private selectedProductId$ = new Subject();

  public selectedProduct$: Observable<Product> = combineLatest(
    this.productsWithCategories$,
    this.selectedProductId$
  )
  .pipe(
    map(([ products, productId ]) => products.find(({ id }) => id === productId)),
    distinctUntilChanged()
  );

  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsURL);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productsURL}/${id}`);
  }

  public setSelectedProductId(productId): void {
    this.selectedProductId$.next(productId);
  }
}
