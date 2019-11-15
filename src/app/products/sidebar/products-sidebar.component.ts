import { Component, OnInit, Input } from "@angular/core";
import { Product } from "./../../product-list/product/product.model";
import {
  EventBusService,
  MyEvent
} from "./../../core/services/event-bus.service";
import { SelectedProductService } from './../../core/services/selected-product.service';

@Component({
  selector: "wsh-products-sidebar",
  template: `
    <div class="card">
      <div class="p-2">
        <input type="search" class="form-control" />
      </div>
      <div class="list-group">
        <a
          (click)="selectedProductService.changeSelectedProduct(p)"
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

  constructor(public selectedProductService: SelectedProductService) {}
}
