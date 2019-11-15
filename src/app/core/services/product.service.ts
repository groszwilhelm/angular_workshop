import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Product } from "../../product-list/product/product.model";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

@Injectable()
export class ProductApiService {
  readonly api = "/api/products";

  private products$: Observable<Product[]>;

  get products() {
    if(!this.products$) {
      this.products$ = this.http.get<Product[]>(this.api).pipe(
        shareReplay()
      );
    }

    return this.products$;
  }

  forceReload() {
    this.products$ = null;
  }

  constructor(
    private http: HttpClient
  ) {}
}
