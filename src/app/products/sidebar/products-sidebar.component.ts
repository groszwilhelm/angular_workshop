import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "./../../product-list/product/product.model";
import { ProductApiService } from './../../core/services/product.service';

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
          (click)="changeSelectedProduct(p)"
          class="list-group-item list-group-item-action"
        >
          {{ p.title }}( {{p.category}})
        </a>
      </div>
    </div>
  `
})
export class ProductsSidebarComponent {

  products$ = this.productsService.productsWithCategories$;

  constructor(
    private productsService: ProductApiService) {
  }

  changeSelectedProduct(p: Product) {
    this.productsService.changeProduct(p.id);
  }
}
