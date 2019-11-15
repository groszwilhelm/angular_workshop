import { Component, OnInit } from "@angular/core";
import { ProductApiService } from '../core/services/product.service';
import { Product } from '../product-list/product/product.model';
import { SelectedProductService } from '../core/services/selected-product.service';

@Component({
  selector: "wsh-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {

  products: Product[] = [];
  selectedProduct: Product;

  constructor(private productsService: ProductApiService,
    public selectedProductService: SelectedProductService) {
    this.productsService.getProducts().subscribe(data => this.products = data)
  }
}
