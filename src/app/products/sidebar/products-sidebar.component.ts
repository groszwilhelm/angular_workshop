import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "./../../product-list/product/product.model";
import { ProductApiService } from "./../../core/services/product.service";
import { Subject, merge } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "wsh-products-sidebar",
  template: `
    <div class="card">
      <div class="p-2">
        <input type="search" class="form-control" />
      </div>
      <div class="list-group">
        <a
          *ngFor="let p of products$ | async"
          class="list-group-item list-group-item-action"
        >
          {{ p.title }}( {{ p.category }})
        </a>
      </div>

      <button (click)="forceReload()">Refresh</button>
    </div>
  `
})
export class ProductsSidebarComponent {
  products$;

  action$ = new Subject();

  constructor(private productsService: ProductApiService) {}

  ngOnInit() {
    const initialProducts$ = this.productsService.products;

    this.products$ = merge(
      initialProducts$,
      this.action$.pipe(switchMap(() => this.productsService.products))
    );
  }

  forceReload() {
    this.action$.next();
    this.productsService.forceReload();
  }
}
