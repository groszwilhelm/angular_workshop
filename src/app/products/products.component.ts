import { Component, OnInit } from "@angular/core";
import { ProductApiService } from '../core/services/product.service';
import { Product } from '../product-list/product/product.model';

@Component({
  selector: "wsh-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
}
