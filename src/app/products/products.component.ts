import { Component, OnInit } from "@angular/core";
import { Subscription, interval, timer, fromEvent, Observable } from "rxjs";
import { debounce, take, pluck, map, debounceTime, filter } from 'rxjs/operators';
import { ProductApiService } from '../core/services/product.service';
import { Product } from '../product-list/product/product.model';

@Component({
  selector: "wsh-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(private productsService: ProductApiService) {
    this.productsService.getProducts().subscribe(data => this.products = data)
  }
}
