import { Component, OnInit } from "@angular/core";
import { ProductApiService } from '../core/services/product.service';
import { Product } from '../product-list/product/product.model';
import { CategoriesService } from '../core/services/categories.service';
import { combineLatest } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: "wsh-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {

  selectedProduct: Product;
  productsNo: number;
  products$ = this.productsService.productsWithCategories$;

  constructor(
    private productsService: ProductApiService) {
  }

  changeSelectedProduct(p: Product) {
    this.selectedProduct = p;
  }
}
