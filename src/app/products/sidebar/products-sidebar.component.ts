import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "./../../product-list/product/product.model";

@Component({
  selector: "wsh-products-sidebar",
  template: `
    <div class="card">
      <div class="p-2">
        <input type="search" class="form-control" />
      </div>
      <div class="list-group">
        <a
          (click)="changeSelectedProduct(p)"
          *ngFor="let p of products"
          class="list-group-item list-group-item-action"
        >
          {{ p.title }}
        </a>
      </div>
    </div>
  `
})
export class ProductsSidebarComponent {

  @Input()
  products: Product[];

  @Output()
  productSelected: EventEmitter<Product> = new EventEmitter();

  changeSelectedProduct(p: Product) {
    this.productSelected.emit(p);
  }
}
